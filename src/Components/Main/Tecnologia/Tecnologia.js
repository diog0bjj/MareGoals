import React from "react";
import FullCard from '../FullCard';
import {MdPermDeviceInformation} from "react-icons/md";
import * as S from './Stecnologia';

export default function Informacao(){
    return(
        <div style={{backgroundColor:'#212529', minHeight:'50vh'}}>
        <FullCard>
            <S.Intro>
                <div>
                    <h6>desenvolvimento Sustentavel na Maré</h6>
                    <h1 style={{margin:'0.5rem 0'}}>2</h1>
                    <h2>Tecnologia</h2>
                </div>
                <div>
                    <MdPermDeviceInformation size={80}/>
                </div>
            </S.Intro>
            <S.Objectives>
                <h2>Objetivos</h2>
                <S.ListOfObjectives>
                    <li>Aulas tecnicas sobre diversos conteudos</li>
                    <li>diminuir</li>
                    <li>diminuir</li>
                    <li>diminuir</li>
                </S.ListOfObjectives>
            </S.Objectives>
        </FullCard>
        </div>
    )
}