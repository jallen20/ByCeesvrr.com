import * as emailJs from 'emailjs-com';

export type EmailRequest = {
    firstName: string,
    lastName: string,
    subject: string,
    email: string,
    message: string,
}

export const sendMail = async (emailRequest: EmailRequest) => {
    const {
        firstName,
        lastName,
        subject,
        email,
        message
    } = emailRequest;
    const fromName = `${firstName} ${lastName}`;
    const res = await emailJs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID as any,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID as any,
        {
            fromName,
            message,
            subject,
            email
        } as any);

    if (+res.status >= 400) {
        console.error('Email not sent');
    }
};