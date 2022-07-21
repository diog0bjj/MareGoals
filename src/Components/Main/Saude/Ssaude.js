import styled from "styled-components";

export const Objectives = styled.div`
border-radius:0 0 20px 20px;
padding:0.4rem;
display:flex;
align-items:center;
flex-direction:column;`

export const Intro = styled.div`
border-radius:20px 20px 0 0;
padding:0.4rem 0.2rem;
display:flex;
justify-content:space-around;
align-items:center;
color:white;
background-color:#00bfff;
height:10rem;`

export const ListOfObjectives = styled.ul`
list-style:none;
width:100%;
display:Flex;
flex-direction:column;

& li{
    margin:0.5rem;
    word-wrap: break-word;
    width:100%;
}`