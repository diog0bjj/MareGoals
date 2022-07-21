import React from "react";
import FullCard from '../FullCard';
import {AiOutlineCar} from "react-icons/ai";
import * as S from './Spoluicao';

export default function Poluiçao(){
    return(
        <div style={{backgroundColor:'#212529', minHeight:'50vh'}}>
        <FullCard>
            <S.Intro>
                <div>
                    <h6>desenvolvimento Sustentavel na Maré</h6>
                    <h1 style={{margin:'0.5rem 0'}}>5</h1>
                    <h2>Poluiçao</h2>
                </div>
                <div>
                    <AiOutlineCar size={80}/>
                </div>
            </S.Intro>
            <S.Objectives>
                <h2>Melhoria na qualidade do Ar</h2>
                <S.ListOfObjectives>
                    <li>Distribuiçao de Plantas para serem colocadas nas lajes das casas para que o carbono emitido nas vias sejam absorvidos</li>
                    <li>Manutenção e plantaçao de plantas de diversos portes em espaços abertos e praças</li>
                    <li>Campanhas de concientização sobre a importância dos meios de transportes alternativos, como as bicicletas</li>
                </S.ListOfObjectives>
            </S.Objectives>
        </FullCard>
        </div>
    )
}