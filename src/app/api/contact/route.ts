/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - SMTP setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email address
    pass: process.env.SMTP_PASSWORD, // Your email password or app password
  },
});

// Email template for contact form submissions
const createEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission - ESA Glazing</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #1e40af; }
        .service-badge { background: #1e40af; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🔧 New Contact Form Submission</h1>
          <p>ESA Glazing - Professional Glazing Services</p>
        </div>
        
        <div class="content">
          <h2>Contact Details</h2>
          
          <div class="field">
            <div class="label">👤 Full Name:</div>
            <div class="value">${formData.name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email Address:</div>
            <div class="value">${formData.email}</div>
          </div>
          
          <div class="field">
            <div class="label">📞 Phone Number:</div>
            <div class="value">${formData.phone}</div>
          </div>
          
          <div class="field">
            <div class="label">🔧 Service Required:</div>
            <div class="value">
              <span class="service-badge">${formData.service}</span>
            </div>
          </div>
          
          <div class="field">
            <div class="label">💬 Project Details:</div>
            <div class="value">${formData.message}</div>
          </div>
          
          <div class="field">
            <div class="label">⏰ Submission Time:</div>
            <div class="value">${new Date().toLocaleString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZone: 'Europe/London'
            })}</div>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Review the customer's requirements</li>
            <li>Prepare a detailed quote</li>
            <li>Contact the customer within 24 hours</li>
            <li>Schedule a site visit if needed</li>
          </ul>
          <p>This email was automatically generated from the ESA Glazing website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, service, message } = body;
    
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailHtml = createEmailTemplate(body);
    
    // Email options
    const mailOptions = {
      from: `"ESA Glazing Website" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // Send to admin
      replyTo: email, // Allow admin to reply directly to customer
      subject: `🔧 New Contact Form Submission - ${service} - ${name}`,
      html: emailHtml,
      text: `
New Contact Form Submission - ESA Glazing

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}

Submitted: ${new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/London'
      })}

Please respond to this customer within 24 hours.
      `.trim()
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You - ESA Glazing</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Thank You for Contacting ESA Glazing!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for your interest in our glazing services. We have received your request for <strong>${service}</strong> and will get back to you within 24 hours.</p>
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your requirements</li>
              <li>We'll prepare a detailed quote for your project</li>
              <li>One of our experts will contact you to discuss the details</li>
              <li>If needed, we can schedule a free on-site consultation</li>
            </ul>
            <p>If you have any urgent questions, please call us at:</p>
            <p><strong>📞 0208 599 2753</strong> or <strong>0730 5130 643</strong></p>
            <p>Best regards,<br>The ESA Glazing Team</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send confirmation to customer
    await transporter.sendMail({
      from: `"ESA Glazing" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: 'Thank You for Contacting ESA Glazing - We\'ll Be In Touch Soon!',
      html: customerEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}
