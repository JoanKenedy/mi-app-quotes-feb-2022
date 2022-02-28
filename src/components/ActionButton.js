import React from "react";



const ActionButton = ({changeQuotes, colors}) =>{
   
  
    return(
        <button onClick={changeQuotes} style={{color:colors}} >
        <i class="fas fa-arrow-circle-right"></i>
      </button>
       
    )

}

export default ActionButton;