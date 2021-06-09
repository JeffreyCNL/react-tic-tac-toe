import React, {useState} from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';

const styles = {
    width: '200px',
    margin: '20px auto',
}

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = i => {
        const boardCopy = [...board]
        // if user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}> Start game </button>
    }
    
    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p> {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')} </p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;