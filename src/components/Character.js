// Write your Character component here
import React from 'react';


const Characters = (props) => {

    const {name, height, characterList } = props;

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
                    Height : {height}
                </p>
            </div>
          </>
        )
      })}
       </div>
   )
}

export default Characters;