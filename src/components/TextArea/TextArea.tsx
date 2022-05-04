import React from 'react';
import {TextAreaWrapper} from "./TextArea.styles";

const TextArea = (props: {
    text: string,
    name: string,
    placeholder: string,
    onTextChanged: any
}) => {
    const { text, name, placeholder, onTextChanged } = props;
    
    return <TextAreaWrapper name={name} placeholder={placeholder} onChange={onTextChanged}/>
};
export default TextArea;
