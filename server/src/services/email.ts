import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
  const html = `
    <h1>Welcome to ChristCircle, ${name}!</h1>
    <p>We're excited to have you join our Christian community.</p>
    <p>Start exploring:</p>
    <ul>
      <li>Join prayer groups</li>
      <li>Read daily devotionals</li>
      <li>Connect with pastors</li>
      <li>Attend events</li>
    </ul>
    <p>God bless you!</p>
  `;
  await sendEmail(email, 'Welcome to ChristCircle', html);
};

export const sendConsultationConfirmation = async (
  email: string,
  name: string,
  pastorName: string,
  date: Date
) => {
  const html = `
    <h1>Consultation Confirmed</h1>
    <p>Hi ${name},</p>
    <p>Your consultation with Pastor ${pastorName} has been scheduled for:</p>
    <p><strong>${date.toLocaleString()}</strong></p>
    <p>You will receive a reminder 24 hours before the consultation.</p>
    <p>God bless!</p>
  `;
  await sendEmail(email, 'Consultation Confirmed', html);
};

export const sendPrayerNotification = async (
  email: string,
  name: string,
  prayerTitle: string
) => {
  const html = `
    <h1>Someone Prayed for You</h1>
    <p>Hi ${name},</p>
    <p>A member of the community has prayed for your request: <strong>${prayerTitle}</strong></p>
    <p>Keep the faith!</p>
  `;
  await sendEmail(email, 'Prayer Notification', html);
};
