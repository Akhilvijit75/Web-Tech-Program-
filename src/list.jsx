import React from 'react'

const List2 = () => {
    let lifeErrors = [
        "Unnecessary commitments",
        "Unaku ena paa jolly ah iruka",
        "Searching for tasty foods",
        "What a karuvad",
        "Life is not about ",
    ];
    console.log(lifeErrors);
    
    return(
        <div>
            <h1>life error</h1>
            <ul>
                {lifeErrors.map((error,index) =>{
                    return <li key={index}>{error}</li>
                }
            )
                }
            </ul>
        </div>
     )
    
    }

export default List2;