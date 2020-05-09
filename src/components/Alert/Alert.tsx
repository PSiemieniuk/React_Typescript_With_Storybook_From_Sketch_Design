import React from 'react'
import styled from '@emotion/styled';
import {ErrorIcon} from '../../Icons/ErrorIcon';

function getContainerStyle(type: AlertType){
    const style: any = {};

    switch (type) {
        case AlertType.Error:
            style["--border"] = "solid 1px #ffa39e"
            style["--background-color"] = "#fff1f0"
            break;
            case AlertType.Info:
            style["--border"] = "solid 1px #91d5ff"
            style["--background-color"] = "#e6f7ff"            
            break;
        case AlertType.Success:
            style["--border"] = "solid 1px #b7eb8f"
            style["--background-color"] = "#f6ffed"            
            break;
        case AlertType.Warning:
            style["--border"] = "solid 1px #ffe58f"
            style["--background-color"] = "#fffbe6"            
            break;
    }

    return style;
}

const Container = styled.div`
    --border: solid 1px #ffa39e;
    --background-color: #fff1f0;
    width: 100%;
    border-radius: 4px;
    border: var(--border);
    background-color: var(--background-color);
    display: flex;
`;

const Icon = styled.div`
    width: 14px;
    height: 14px;
    object-fit: contain;
    padding: 10px 0px 10px 10px
}
`;

const Message = styled.div`
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.65);
    padding: 10px;
`;

const Close = styled.img`

`;

const Alert = (props: AlertProps) => {
    const containerStyle: any = getContainerStyle(props.type);
    return (
        <Container style={containerStyle}>
            <Icon><ErrorIcon/></Icon><Message>Error message</Message>
        </Container>
    )
}

export default Alert;

interface AlertProps {
    size: AlertSize,
    type: AlertType
}

export enum AlertSize {
    Basic = "BASIC",
    Large = "LARGE"
}

export enum AlertType {
    Error = "ERROR",
    Info = "INFO",
    Success = "SUCCESS",
    Warning = "WARNING"
}