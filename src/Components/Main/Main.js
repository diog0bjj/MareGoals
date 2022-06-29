import React, {useState, useRef, useEffect} from "react";
import * as S from './styledMain.js'
import DesSus from '../../Assets/dessus.png';
import data from '../../Goals.json'
import {BsBoxArrowRight} from "react-icons/bs";

export default function Main(){

    const [MyGoals, setMyGoals]=useState([])
    const backgroundRandomColor = useRef()

    function CreatingMyList(){
        setMyGoals(data)
    }

    useEffect(()=>{
        CreatingMyList()
    }, [])

    return(
        <>
        <S.Container>
            <S.FirstPartOfMain>
                <S.title>Necessidades e Metas para o desenvolvimento sustentavel no Complexo da Maré</S.title>
                <S.greenWorld src={DesSus}/>
            </S.FirstPartOfMain>
            <S.WhoAreWe>
                <S.Infos>
                    <h2>Quem somos</h2>
                    <S.InfosParagraph>Somos uma instituiçao que busca desenvolver de maneira sustenvel o complexo da mare, sem a necessidade de auxilio governamental</S.InfosParagraph>
                </S.Infos>
                <S.MareImg>
                </S.MareImg>
            </S.WhoAreWe>
            <S.OurGoals>
                <S.Infos>
                    <h2>Nossos objetivos</h2>
                    <S.InfosParagraph>Nossos principais objetivos e metas para o desenvolvimento local podem ser encontrados a seguir:</S.InfosParagraph>
                </S.Infos>
                <S.AllGoals>
                    {MyGoals.map((item)=>(
                        <S.EachGoal>
                            <S.InfosGoal>
                                <S.GoalNumber>{item.Id}</S.GoalNumber>
                                <S.GoalName>{item.goal}</S.GoalName>
                            </S.InfosGoal>
                            <S.IconGoal>
                                <BsBoxArrowRight style={{width:'70%', height:'70%'}}/>
                            </S.IconGoal>
                        </S.EachGoal>
                    ))}
                </S.AllGoals>
            </S.OurGoals>
        </S.Container>
        </>
    )
};