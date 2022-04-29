import React, {useState} from 'react';
import {ContactForm, ContactWrapper} from "./Contact.styles";
import Textbox from "../../components/TextBox";
import {sendMail} from "../../service/EmailService";

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onTextChange = (text: any, setText: any) => setText(text);
    
    const reset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const onSubmit =  (e: any) => {
        e.preventDefault();
        sendMail(
            firstName,
            lastName,
            subject,
            email,
            message )
            .then(() => reset());
    };

    return (
        <ContactWrapper>
            <ContactForm onSubmit={onSubmit}>
                <Textbox label='First Name' text={firstName} onTextChanged={(e: any) => onTextChange(e.target.value, setFirstName)}/>
                <Textbox label='Last Name' text={lastName} onTextChanged={(e: any) => onTextChange(e.target.value, setLastName)}/>
                <Textbox label='Subject' text={subject} onTextChanged={(e: any) => onTextChange(e.target.value, setSubject)}/>
                <Textbox label='Email' text={email} onTextChanged={(e: any) => onTextChange(e.target.value, setEmail)}/>
                <label>
                    Message:
                    <textarea name="message" onChange={(e: any) => onTextChange(e.target.value, setMessage)}/>
                </label>
                <button>Submit</button>
            </ContactForm> 
        </ContactWrapper>
    );
}
export default Contact;
