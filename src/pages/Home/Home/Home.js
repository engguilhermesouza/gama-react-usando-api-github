import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState ('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
   axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
    const repositorios = response.data;  
    const repositoriosName = [];
    repositorios.map((repository) => {
      repositoriosName.push(repository.name);
    });
    localStorage.setItem('repositoriosName', JSON.stringify(repositoriosName));
    setErro(false);
    history.push('/repositorios');
    })
    .catch(err => {
      setErro(true);
    });
  } 

  return (
    <S.HomeContainer>
    <S.Content>
    <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange= {e => setUsuario(e.target.value)}/>  
    <S.Button type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
    </S.Content>
    {erro ? <S.ErroMsg> Ocorreu um erro. Tente novamente.</S.ErroMsg>: ''}
    </S.HomeContainer>
    );
}

export default App;