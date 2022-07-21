import React from "react";
import FullCard from '../FullCard';
import {BsBook} from "react-icons/bs";
import * as S from './Seducacao';

export default function Educaçao(){
    return(
        <div style={{backgroundColor:'#212529', minHeight:'50vh'}}>
        <FullCard>
            <S.Intro>
                <div>
                    <h6>desenvolvimento Sustentavel na Maré</h6>
                    <h1 style={{margin:'0.5rem 0'}}>1</h1>
                    <h2>Educaçao</h2>
                </div>
                <div>
                    <BsBook size={80}/>
                </div>
            </S.Intro>
            <S.Objectives>
                <h2>Mitigar o problema educacional na Maré</h2>
                <S.ListOfObjectives>
                    <li>Concientizaçao dos pais a respeito da importância da escola na educação de seus filhos</li>
                    <li>oficinas ou passeios nas escolas de maneira que as crianças aprendam de forma dinâmica e descontraida para que seja desenvolvido um gosto pelo ambiente escolar</li>
                    <li>Pratica de atividades extracurriculares no contraturno, por exemplo, esportes, artes, computaçao e afins</li>
                </S.ListOfObjectives>
            </S.Objectives>
        </FullCard>
        </div>
    )
}