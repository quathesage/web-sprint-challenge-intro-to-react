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
      color: #f0e000;
      width: 75%;
      margin: 20px auto;
  }
`
const Wrap = styled.div`
  border-radius: 500px;
  width: 40%;
  align-content: center;
  background-color: #beae93;
  margin-bottom: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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