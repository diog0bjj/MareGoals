import React from 'react';
import styled from 'styled-components';

const FullGoal = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:30rem;
color:black;
margin: 0 auto;
border: 1px solid black;
border-radius: 20px 20px;

@media(max-width:700px){
    width:19rem;
}`

export default function Cards({children}){
    return(
        <FullGoal>
            {children}
        </FullGoal>
    )
}