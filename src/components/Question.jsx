import React from 'react';

function Quiz(props){
    return (
        <>
        <div className="">
        <p className="text-xl font-semibold text-gray-800 mb-4">Who is the capital of France?</p>
            <p>{props.capital1}</p>
            <p>{props.capital2}</p>              
            <p>{props.capital3}</p> 
            <p>{props.capital4}</p>   
        </div>
        </>
    )
}

export default Quiz;