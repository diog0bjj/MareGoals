import React from "react";
import * as S from './styledHeader.js'

export default function Header(){

    return(
        <>
        <S.Menu>
            <div>
                <h2>Maré Unida</h2>
            </div>
            <div>
                <S.searchBar type='text' placeholder="Search our projects..."/>
            </div>
        </S.Menu>
        </>
    )
};