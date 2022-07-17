import styled from "styled-components";


export const Container = styled.div`
width:100%;
display:flex;
padding-top:2rem;
align-items:center;
flex-direction:column;
background-color:#212529;`

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


export const Infos = styled.div`
width:50%;
min-width:17rem;
display:Flex;
flex-direction:column;
aling-items:flex-start;
justify-content:center;
font-size:19px;`

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