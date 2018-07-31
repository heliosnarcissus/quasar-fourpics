export const endGame = (state) => {
    state.gameIsFinished = true
}

export const restartGame = (state) => {
    state.gameIsFinished = false
}

export const getScore = (state) => {
    state.gameIsFinished = false
}

export const saveScore = (state) => {
    state.gameIsFinished = false
} 
