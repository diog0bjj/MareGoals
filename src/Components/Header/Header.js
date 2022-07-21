import React, {useState, useRef} from "react";
import * as S from './styledHeader.js';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Header(){

    
    const [modal, setModal] = useState(false);

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('sendemail', 'template_dbl6iz8', form.current, 'aQc1RmLvYB4Xc7Rn8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    function AddSuggestion(){
        return(
        <>
        <S.SuggestionModal>
            <h4>sentiu falta de algum problema local?</h4>
            <h6>Digite ele Abaixo</h6>
            <form>
                <S.Check>
                    <label>Tema:</label>
                    <S.InputSuggestions type='text'/>
                </S.Check>
                <S.Check>
                    <label>Comentarios sobre o tema:</label>
                    <S.InputSuggestions type='Comentarios'/>
                </S.Check>
                <S.Check>
                    <label>Digite Seu email para contato:</label>
                    <S.InputSuggestions ref={form} type='email' name='user_email'/>
                </S.Check>
                <S.SubmitBtn type='submit' onSubmit={()=>{sendEmail()}}>Submit</S.SubmitBtn>
            </form>
        </S.SuggestionModal>
        </>
    )}

    return(
        <>
        <S.Menu>
            <div>
                <Link style={{textDecoration:'none', color:'currentcolor'}} to='/'><h2>Maré</h2></Link>
            </div>
            <div>
                <S.suggestionBtn onClick={()=>{setModal(!modal)}}>{modal ? 'Fechar Sugestao' : 'Sugestao de problemas'}</S.suggestionBtn>
                {modal && AddSuggestion()}
            </div>
        </S.Menu>
        </>
    )
};