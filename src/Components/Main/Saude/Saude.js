import React from "react";
import FullCard from '../FullCard';
import {BsBook} from "react-icons/bs";
import * as S from './Ssaude';

export default function Infraestrutura(){
    return(
        <div style={{backgroundColor:'#212529', minHeight:'50vh'}}>
        <FullCard>
            <S.Intro>
                <div>
                    <h6>desenvolvimento Sustentavel na Maré</h6>
                    <h1 style={{margin:'0.5rem 0'}}>4</h1>
                    <h2>Saude</h2>
                </div>
                <div>
                    <BsBook size={80}/>
                </div>
            </S.Intro>
            <S.Objectives>
                <h2>Objetivos</h2>
                <S.ListOfObjectives>
                    <li>Promover eventos periódicos com psicologos para ajudar na saude mental</li>
                    <li>Fiscalizar como clientes o trabalho nas redes de saúde local, Upa e clínicas da familia</li>
                    <li>Eventos para concientizaçao como rodas de conversas sobre doenças ou até mesmo questões de saúde pública no geral</li>
                </S.ListOfObjectives>
            </S.Objectives>
        </FullCard>
        </div>
    )
}