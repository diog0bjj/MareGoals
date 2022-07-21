import React from "react";
import * as S from './styledFooter.js';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default function Footer(){

    return(
        <>
        <S.MidiasAndlocalization>
        <div>
            <h2>Maré</h2>
            <S.Welcome>Bem vindo à pagina da Maré</S.Welcome>
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
                    <a style={{color:"#212529"}} href="https://instagram.com/ggsantz"><li><FaInstagramSquare size={30}/></li></a>
                    <a style={{color:"#212529"}} href = "https://www.linkedin.com/in/diogo-sales-368b64224"><li><FaLinkedin  size={30}/></li></a>
                    <a style={{color:"#212529"}} href="mailto:dsales289@poli.ufrj.br"><li><FaMailBulk size={30}/></li></a>
                    <a style={{color:"#212529"}} href="https://github.com/diog0bjj"><li><FaGithubSquare size={30}/></li></a>
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