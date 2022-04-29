import React from 'react';
import {TextBoxInput, TextBoxLabel, TextboxWrapper} from "./TextBox.styles";

const Textbox = (props: { 
    onTextChanged: any,
    label: string,
    text: string
}) => {
    const { onTextChanged, label, text } = props;
    
    return (
        <TextboxWrapper>
            <TextBoxInput type='text' onChange={onTextChanged}/>
            <TextBoxLabel className='main'>{text ? '' : label}</TextBoxLabel>
            <TextBoxLabel className='sm'>{label}</TextBoxLabel>
        </TextboxWrapper>
    );
}
export default Textbox;
