import styled from "styled-components";

export const Menu = styled.section`
display:flex;
justify-content:space-between;
height:15vh;
border-width:thin;
align-items:center;
padding:0 5vw;
position:relative;
background-color:#212529;`

export const suggestionBtn  = styled.button`
height:2rem;
border-radius:10px;
width: 15vw;
min-width:10rem;
border:none;
font-size:10px;
background-color:#FED136;
font-weight:700px;`

export const SuggestionModal = styled.div`
width:40vw;
flex-wrap:wrap:
display:Flex;
flex-direction:column;
border: 1px solid black;
background-color:#00bfff;
position:absolute;
right:30%;
top:120%;
text-align:center;
padding:0.4rem 0.2rem;

@media(max-width:700px){
    width:80vw;
    right:10%;
}`

export const InputSuggestions = styled.input`
width:50%;
border:none;
font-size:10px;
border-radius:10px;
margin-left:0.2rem;
padding:0.2rem;
outline:none;
color:#000;
text-transform:none;`

export const Check = styled.div`
display:Flex;
align-items:center;
font-size:1.5vh;
margin:1rem 0;`

export const SubmitBtn = styled.button`
width:5rem;
border:none;
font-size:10px;
background-color:#dcdcdc;
border-radius:10px;
padding:0.3rem;
`

export const ListMenu = styled.ul`
display:Flex;
list-style:none;
width:15rem;
justify-content:space-evenly;
align-items:Center;
height:4rem;`