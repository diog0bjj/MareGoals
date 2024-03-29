import React from "react";
import * as S from './Shome'
import Goals from './Cards'
import {AiOutlineCar} from "react-icons/ai";
import {BsWater} from "react-icons/bs";
import {BsMusicPlayerFill} from "react-icons/bs";
import {BsBook} from "react-icons/bs";
import {BiHealth} from "react-icons/bi";
import {Link} from 'react-router-dom';

export default function Main(){

    return(
        <>
        <S.Container>
            <S.OurGoals>
                <S.Infos>
                    <h2>objetivos</h2>
                    <S.InfosParagraph>Nossos principais objetivos e metas para o desenvolvimento local podem ser encontrados a seguir:</S.InfosParagraph>
                </S.Infos>
                <S.AllGoals>
                    <Link style={{textDecoration:'none'}} to='./Saneamento'>
                        <Goals>
                            <S.InfosGoal>
                                <S.GoalNumber>1</S.GoalNumber>
                                <S.GoalName>Saneamento Basico</S.GoalName>
                            </S.InfosGoal>
                            <S.IconGoal>
                                <BsWater size={80}/>
                            </S.IconGoal>
                        </Goals>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='./CultureAndLeisure'>
                        <Goals>
                            <S.InfosGoal>
                                <S.GoalNumber>2</S.GoalNumber>
                                <S.GoalName>Cultura e Lazer</S.GoalName>
                            </S.InfosGoal>
                            <S.IconGoal>
                                <BsMusicPlayerFill size={80}/>
                            </S.IconGoal>
                        </Goals>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='./Educacao'>
                        <Goals>
                            <S.InfosGoal>
                                <S.GoalNumber>3</S.GoalNumber>
                                <S.GoalName>Educação</S.GoalName>
                            </S.InfosGoal>
                            <S.IconGoal>
                                <BsBook size={80}/>
                            </S.IconGoal>
                        </Goals>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='./Saude'>
                        <Goals>
                            <S.InfosGoal>
                                <S.GoalNumber>4</S.GoalNumber>
                                <S.GoalName>Saúde</S.GoalName>
                            </S.InfosGoal>
                            <S.IconGoal>
                                <BiHealth size={80}/>
                            </S.IconGoal>
                        </Goals>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='./Poluicao'>
                        <Goals>
                            <S.InfosGoal>
                                <S.GoalNumber>5</S.GoalNumber>
                                <S.GoalName>Poluição</S.GoalName>
                            </S.InfosGoal>
                            <S.IconGoal>
                                <AiOutlineCar size={80}/>
                            </S.IconGoal>
                        </Goals>
                    </Link>
                </S.AllGoals>
            </S.OurGoals>
        </S.Container>
        </>
    )
};