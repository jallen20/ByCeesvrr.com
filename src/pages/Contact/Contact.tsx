import React, {RefObject, useRef, useState} from 'react';
import {
    ButtonBorder,
    ButtonText,
    ContactForm,
    ContactWrapper,
    FormItem, ForwardArrow,
    SubmitButton
} from "./Contact.styles";
import Textbox from "../../components/TextBox";
import {EmailRequest, sendMail} from "../../service/EmailService";
import TextArea from "../../components/TextArea";

const Contact = () => {
    const [emailReq, setEmailReq] = useState({} as EmailRequest);

    const sendButtonDisabled = () => !emailReq.firstName || !emailReq.lastName || !emailReq.email || !emailReq.subject || !emailReq.message;

    const onSubmit = (e: any) => {
        e.preventDefault();
        sendMail(emailReq)
            .then(() => e.target.reset());
    };

    return (
        <ContactWrapper>
            <ContactForm onSubmit={onSubmit}>
                <FormItem>
                    <Textbox
                        label='First Name'
                        text={emailReq.firstName}
                        onTextChanged={(e: any) => setEmailReq({
                            ...emailReq,
                            firstName: e.target.value
                        })}
                    />
                </FormItem>
                <FormItem>
                    <Textbox
                        label='Last Name'
                        text={emailReq.lastName}
                        onTextChanged={(e: any) => setEmailReq({
                            ...emailReq,
                            lastName: e.target.value
                        })}
                    />
                </FormItem>
                <FormItem>
                    <Textbox
                        label='Subject'
                        text={emailReq.subject}
                        onTextChanged={(e: any) => setEmailReq({
                            ...emailReq,
                            subject: e.target.value
                        })}
                    />
                </FormItem>
                <FormItem>
                    <Textbox
                        label='Email'
                        text={emailReq.email}
                        onTextChanged={(e: any) => setEmailReq({
                            ...emailReq,
                            email: e.target.value
                        })}
                    />
                </FormItem>
                <FormItem>
                    <TextArea
                        text={emailReq.message}
                        name='message'
                        placeholder='Message'
                        onTextChanged={(e: any) => setEmailReq({
                            ...emailReq,
                            message: e.target.value
                        })}
                    />
                </FormItem>
                <SubmitButton type='submit' disabled={sendButtonDisabled()}>
                    <ForwardArrow className='fas fa-arrow-right'/>
                    <ButtonText>Submit</ButtonText>
                </SubmitButton>
            </ContactForm>
        </ContactWrapper>
    );
}
export default Contact;
