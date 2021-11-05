// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: space-evenly;


  h3 {
      font-size: 30px;
      border-bottom: 1px dashed #FFE81F;
      color: #FFE81F;
      text-align: center;
      display: flex;
      justify-content: center;
      width: 75%;
      margin: 20px auto;
      padding: 5px;
      border-radius: 10px;
  }

  p {
      font-weight: bold;
      font-family: sans-serif;
      color: #FFE81F;
      width: 75%;
      margin: 20px auto;
  }
`
const Wrap = styled.div`
  border-radius: 500px;
  width: 50%;
  align-content: center;
  background-color: black;
  margin-bottom: 2rem;
`






const Characters = (props) => {

    const { characterList } = props;

   return (
       <Container>
             {characterList.map((character) => {
        return (
          <Wrap>
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
          </Wrap>
        )
      })}
       </Container>
   )
}

export default Characters;