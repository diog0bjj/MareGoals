import styled from "styled-components";


export const Container = styled.div`
width:100%;
display:flex;
margin-top:2rem;
align-items:center;
flex-direction:column;`

export const FirstPartOfMain = styled.section`
background:#00bfff;
wdith:100vw;
height:90vh;
width:90vw;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 1vw 0 1vw;
color:#fff;
font-size:20px;
font-weight:bolder;`

export const title = styled.h1`
width:30%;
min-width:17rem;`

export const greenWorld = styled.img`
width:40vw;

@media(max-width:600px){
    display:none;
}`

export const WhoAreWe = styled.section`
padding: 0 1vw 0 1vw;
margin:2rem 0 2rem; 0;
width:90vw;
display:flex;
justify-content:space-between;
flex-wrap:wrap;`

export const Infos = styled.div`
width:50%;
min-width:17rem;
display:Flex;
flex-direction:column;
aling-items:flex-start;
justify-content:center;
font-size:19px;`

export const MareImg = styled.div`
width:13rem;
height:13rem;
background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47DX3XeA7zJGUwnA6QH00U1O4GV7l7w1Jtw&usqp=CAU');
background-position:center;
background-size:cover;
border-radius:50%;`

export const InfosParagraph = styled.p`
margin:1.5rem 0 2rem 0;
font-size:14px;
font-weight:700px;`

export const OurGoals = styled.section`
padding: 0 1vw 0 1vw;
margin:2rem 0 2rem; 0;
width:90vw;
display:flex;
flex-direction:column;
align-items:flex-start;`

export const AllGoals = styled.div`
width:90vw;
display:flex;
justify-content:flex-start;
flex-wrap:wrap;

@media(max-width:800px){
    justify-content:Center;
}`

export const EachGoal = styled.div`
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

export const InfosGoal = styled.div`
height:30%;
display:flex;
align-items:center;`

export const GoalName = styled.h3`
font-size:12px;
margin-left:0.5rem;`

export const GoalNumber = styled.h3`
font-size:35px;`

export const IconGoal = styled.div`
display:flex;
height:70%;
justify-content:center;
align-items:center;`