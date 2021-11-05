// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  h3 {
      font-size: 30px;
      color: #FFE81F;
      background-color: black;
      text-align: center;
      display: flex;
      justify-content: center;
      width: 25%;
      margin: 20px auto;
      padding: 5px;
      border-radius: 10px;
  }

  p {
      font-weight: bold;
      font-family: sans-serif;
      background-color: black;
      color: #FFE81F;
      width: 25%;
      margin: 20px auto;
  }
`
const Wrap = styled.div`
  display: flex;
  flex-direction: flex-wrap;
`






const Characters = (props) => {

    const { characterList } = props;

   return (
       <Container>
             {characterList.map((character) => {
        return (
          <>
            <div>
                <h3>{character.name}</h3>
            </div>
            <div>
                <p>
                    Height : {character.height}
                </p>
                <p>
                    Birth Year : {character.birth_year}
                </p>
                <p>
                    Gender : {character.gender}
                </p>
                <p>
                    Hair Color : {character.hair_color}
                </p>
            </div>
          </>
        )
      })}
       </Container>
   )
}

export default Characters;