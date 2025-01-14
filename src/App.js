import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Characters from './components/Character';
import styled from 'styled-components';

const Header = styled.h1`
box-shadow: 0 0 20px #999;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacterList(res.data)
    })
    .catch(error => {
      console.error(error);
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters key={characterList.url} characterList={characterList}/>
    </div>
  );
}

export default App;
