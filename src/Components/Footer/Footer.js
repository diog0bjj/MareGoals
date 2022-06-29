import React from "react";
import * as S from './styledFooter.js'

export default function Footer(){
    return(
        <>
        <S.MidiasAndlocalization>
        <div>
            <h2>Maré Unida</h2>
            <S.Welcome>Bem vindo à pagina da Maré Unida</S.Welcome>
            <nav>
                <S.ListItems>
                    <li>Rio de Janeiro, Rj, Brasil</li>
                    <li>Cep:21040460</li>
                </S.ListItems>
            </nav>
        </div>
        <div>
            <nav>
                <S.ListItems>
                    <li>Instagram</li>
                    <li>Github</li>
                    <li>Gmail</li>
                    <li>Linkedin</li>
                </S.ListItems>
            </nav>
        </div>
        </S.MidiasAndlocalization>
        <S.Creator>
            <h6>Pagina feita por Diogo sales, aluno do VNW</h6>
        </S.Creator>
        </>
    )
};