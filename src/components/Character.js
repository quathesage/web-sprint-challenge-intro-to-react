// Write your Character component here
import React from 'react';
import styled from 'styled-components';




const Characters = (props) => {

    const { characterList } = props;

   return (
       <div>
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
       </div>
   )
}

export default Characters;