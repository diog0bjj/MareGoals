import React from 'react';
import styled from 'styled-components';

const Goal = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:10rem;
width:10rem;
background-color:#00bfff;
border-radius:10px;
margin:1.2rem;
color:white;
padding:0.5rem;
box-shadow:0 0 10px #00bfff;
transition: all 200ms linear;

&:hover{
    transform: scale(1.1);
}`

export default function Cards({children}){
    return(
        <Goal>
            {children}
        </Goal>
    )
}