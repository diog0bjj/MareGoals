import React from "react";
import FullCard from '../FullCard';
import {BsMusicPlayerFill} from "react-icons/bs";
import * as S from './ScultureAndLeisure';

export default function CultureAndLeisure(){
    return(
        <div style={{backgroundColor:'#212529', minHeight:'50vh'}}>
        <FullCard>
            <S.Intro>
                <div>
                    <h6>desenvolvimento Sustentavel na Maré</h6>
                    <h1 style={{margin:'0.5rem 0'}}>2</h1>
                    <h2>Cultura e Lazer</h2>
                </div>
                <div>
                    <BsMusicPlayerFill size={80}/>
                </div>
            </S.Intro>
            <S.Objectives>
                <h2>Objetivos</h2>
                <S.ListOfObjectives>
                    <li>Reformas básicas das areas de lazer da região</li>
                    <li>Promoçao de eventos culturais com maior frequencia</li>
                    <li>Maior incentivo à visitas a espaços culturais da maré, como por exemplo o museu.</li>
                    <li>Dar maior visibilidade aos artitas da região nas redes de comunicaçao local</li>
                </S.ListOfObjectives>
            </S.Objectives>
        </FullCard>
        </div>
    )
}