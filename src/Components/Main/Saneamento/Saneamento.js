import React from "react";
import FullCard from '../FullCard';
import {BsBook} from "react-icons/bs";
import * as S from './Ssaneamento';

export default function Saneamento(){
    return(
        <div style={{backgroundColor:'#212529', minHeight:'50vh'}}>
        <FullCard>
            <S.Intro>
                <div>
                    <h6>desenvolvimento Sustentavel na Maré</h6>
                    <h1 style={{margin:'0.5rem 0'}}>1</h1>
                    <h2>Saneamento</h2>
                </div>
                <div>
                    <BsBook size={80}/>
                </div>
            </S.Intro>
            <S.Objectives>
                <h2>Objetivos</h2>
                <S.ListOfObjectives>
                    <li>Promoçao de campanhas para concientizaçao sobre o ciclo de despejos e seus impactos na maré</li>
                    <li>ajuda local na coleta de lixos</li>
                    <li>trabalhar a concientizaçao sobre a importancia do não desperdicio de água</li>
                    <li>Pesquisas para observar a qualidade da agua nas residencias</li>
                </S.ListOfObjectives>
            </S.Objectives>
        </FullCard>
        </div>
    )
}