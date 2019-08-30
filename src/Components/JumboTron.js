import React from 'react';
import Jumbotron from "reactstrap/lib/Jumbotron";
import Date from "./Date";
import Title from "./Title";
import CopyRight from "./copyright";
import styled from 'styled-components'

function Jumbo(props) {

    const Headline = styled.h1`
        font-family: 'Lexend Deca', sans-serif;
        color: white;
        margin-top: 0px;
    `;

    const Author = styled.h3`
      font-family: 'Space Mono', monospace;
      color: white;
    `;

    const Background = styled.div`
      background-color: #005cb3;
      padding: 0;
    `;
    
    return (
        <Background>
            <Jumbotron>
              <Headline><Title title={props.title}/></Headline>
                <Author><CopyRight copyright={props.copyright}/></Author>
                <Author><Date date={props.date}/></Author>
            </Jumbotron>
        </Background>
    )
}

export default Jumbo