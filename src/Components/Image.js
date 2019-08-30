import React from 'react';
import  styled  from 'styled-components';

function Image(props) {
    const StyledImg = styled.img`
       border-radius: 3rem;
    `;

    return(
            <StyledImg src={props.image.url} alt=""/>
    )
}

export default Image;