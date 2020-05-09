import React from 'react';
import { getButtonSize, getButtonStyle, ButtonSize, ButtonType } from './Button.service';

const Button = (props: ButtonProps) => {
    
    const Button: any = getButtonSize(props.size);    
    const ButtonStyle: any = getButtonStyle(props.type);

    return (
            <Button disabled={props.disabled} style={ButtonStyle}>
                <span>{props.text}</span>
            </Button>
    )
}

export default Button;

interface ButtonProps {
    text?: string,
    size?: ButtonSize,
    type?: ButtonType,
    disabled?: boolean
}

