import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

interface ProgressBarProps{
    percent: number;
    percentVisible?: boolean
}

const ProgressBarContainer = styled.div`
    width: 85%;
    height: 8px;
    border-radius: 8px;
    background-color: #f5f5f5;
    margin: auto;
`;

const ProgressBarBelt = styled.div`
    --progressPercent: 0%;
    width: var(--progressPercent);
    height: 8px;
    border-radius: 8px;
    background-color: #009bde;
`;

const ProgressBarText = styled.div`
    width: 10%;
    height: 22px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.45);
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 22px;
    justify-content: space-evenly;
`;

const ProgressBar = (props: ProgressBarProps) => {

    const [percent, setPercent] = useState<number>(props.percent);

    const ProgressBarStyle: any = {};

    ProgressBarStyle["--progressPercent"] = `${percent}%`;

    return <Container>
        <ProgressBarContainer>
            <ProgressBarBelt style={ProgressBarStyle}/>
        </ProgressBarContainer>
        <ProgressBarText>
            {props.percentVisible ? `${percent}%` : `Loading`}
        </ProgressBarText>        
    </Container> 
}

export default ProgressBar