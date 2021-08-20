import React, {useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router';

export default function Repositorios() {
    const history = useHistory(); 
    const [Repositorios, setRepositorios] = useState([]);
    
    useEffect(() => {
        let repositoriosName = localStorage.getItem('repositoriosName');
        if (repositoriosName != null) {
        repositoriosName = JSON.parse(repositoriosName);
        setRepositorios(repositoriosName);
        localStorage.clear();
        } else {
            history.push('/')
        }
    }, []); 

    return (
    <S.Container>
    <S.Title> Repositórios</S.Title>
    <S.List>
        { Repositorios.map(repository => {
            return (
                <S.ListItem>Repositório: {repository}</S.ListItem>
            )
        }) }        
    </S.List>
    <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
    )   
}