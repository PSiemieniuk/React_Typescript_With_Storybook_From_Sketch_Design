import styled from '@emotion/styled';
import { css } from '@emotion/core'

export function getButtonSize(size?: ButtonSize) {
    switch(size){        
        case ButtonSize.Small:
            return SmallButton        
        case ButtonSize.Normal:
        default: 
            return NormalButton
        case ButtonSize.Big:
            return BigButton 
    }  
}

export function getButtonStyle(type?: ButtonType){
    const style: any = {};

    switch(type){
        case ButtonType.Primary:
        default:
            style["--background-color"] = "#009bde";
            style["--active-background-color"] = "#009bba";
            style["--border"] = "solid 0px #d9d9d9";
            style["--span-color"] = "#ffffff";
            break;
        case ButtonType.Secondary:
            style["--background-color"] = "#ffffff";
            style["--active-background-color"] = "#d9d9d9";
            style["--border"] = "solid 1px #d9d9d9";
            style["--span-color"] = "rgba(0, 0, 0, 0.65)";
            break;
        case ButtonType.Dashed:
            style["--background-color"] = "#ffffff";
            style["--active-background-color"] = "#d9d9d9";
            style["--border"] = "dashed 1px #d9d9d9";
            style["--span-color"] = "rgba(0, 0, 0, 0.65)";
            break;
        case ButtonType.Danger:
            style["--background-color"] = "rgba(0, 0, 0, 0.04)";
            style["--active-background-color"] = "rgba(0, 0, 0, 0.08)";
            style["--border"] = "solid 1px #d9d9d9";
            style["--span-color"] = "#f5222d";
            break;
    }

    return style;    
}

const BaseButton = styled.button`
    --background-color: #009bde;
    --border: none;
    --span-color: #ffffff;
    --active-background-color: #009bba;
    border-radius: 4px;
    background-color: var(--background-color);
    border: var(--border);
    outline: none;
    font-family: 'Open Sans', sans-serif;
    cursor: ${props => props.disabled ? "default;" : "pointer;"}

    &:active{
        background-color: var(--active-background-color);
    }

    & > span {
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: var(--span-color);
        pointer-events: none;
    }   

    ${props => props.disabled ? 
    css`
        cursor: default;
        border: solid 1px #d9d9d9;
        background-color: rgba(0, 0, 0, 0.04);

        & > span {
            color: rgba(0, 0, 0, 0.25);
        }
    ` 
    :
    css`
        cursor: pointer;
    `}
`;

const SmallButton = styled(BaseButton)`
    width: 67px;
    height: 24px;

    & > span {
        width: 51px;
        height: 20px;
        font-size: 14px;
        line-height: 1.43;
    }
`

const NormalButton = styled(BaseButton)`
    width: 83px;
    height: 32px;

    & > span {
        width: 51px;
        height: 20px;
        font-size: 14px;
        line-height: 1.43;
    }
`

const BigButton = styled(BaseButton)`
    width: 90px;
    height: 40px;

    & > span {
        width: 58px;
        height: 24px;
        font-size: 16px;
        line-height: 1.5;
    }
`

export enum ButtonSize {
    Small = "SMALL",
    Normal = "NORMAL",
    Big = "BIG"
}

export enum ButtonType {
    Primary = "PRIMARY",
    Dashed = "DASHED",
    Secondary= "SECONDARY",
    Danger = "DANGER",
}