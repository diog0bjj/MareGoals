import React, {useState} from "react";
import * as S from './styledHeader.js';
import {Link} from 'react-router-dom'

export default function Header(){

    
    const [modal, setModal] = useState(false);

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
                <S.SubmitBtn type='submit'>Submit</S.SubmitBtn>
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