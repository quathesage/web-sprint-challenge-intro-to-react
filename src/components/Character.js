// Write your Character component here
import React from 'react';


const Characters = (props) => {

    const {name} = props;

   return (
       <div>
           {name};
       </div>
   )
}

export default Characters;