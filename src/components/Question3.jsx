import React from 'react';

function Quiz(props){
    return (
        <>
            <h1>{props.name}</h1>
        <div className="">
            <p>Which programming language is used for React</p>
            <p>{props.prog1}</p>
            <p>{props.prog2}</p>              
            <p>{props.prog3}</p> 
            <p>{props.prog4}</p>   
        </div>
        </>
    )
}

export default Quiz;