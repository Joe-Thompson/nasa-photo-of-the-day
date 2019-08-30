import React from 'react';
import styled from "styled-components";

function Explanation(props) {
    const Explain = styled.h5`
        color: 
        font-size: 1.5rem;
        font-family: 'Space Mono', monospace;
        padding: 0rem 4rem;
        line-height: 2;
        color: white;
    `;

    return (
        <div>
            <Explain>{props.explanation}</Explain>
        </div>
    )
}

export default Explanation;