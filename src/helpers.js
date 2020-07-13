const coinFlip = () =>{
    const faces= ['heads', 'tails']
    return faces[Math.floor(Math.random() * faces.length)]
    
}

const diceRoll = () =>{
    return Math.floor(Math.random() * (6-1) + 1)
}


export {coinFlip, diceRoll}