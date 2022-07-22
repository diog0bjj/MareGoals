import React from "react";
import * as S from './styledFooter.js';
import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

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
                    <a href="https://instagram.com/ggsantz"><li><FaInstagram size={30}/></li></a>
                    <a href="https://www.linkedin.com/in/diogo-sales-368b64224"><li><FaLinkedinIn size={30}/></li></a>
                    <a href="mailto:dsales289@poli.ufrj.br"><li><FaMailBulk size={30}/></li></a>
                    <a href="https://github.com/diog0bjj"><li><FaGithub size={30}/></li></a>
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