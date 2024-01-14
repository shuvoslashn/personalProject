import { useState } from "react";

// Declaring the winner function
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

function Square({ value, onSquareClick }) {
    return (
        <button onClick={() => onSquareClick()} className='btn'>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next Player: ${xIsNext ? "X" : "O"}`;
    }

    const handleClick = (i) => {
        if (squares[i] || winner) return;

        const nxtSquares = squares.slice();

        if (xIsNext) {
            nxtSquares[i] = "X";
        } else {
            nxtSquares[i] = "O";
        }
        onPlay(nxtSquares);
    };

    return (
        <>
            <p
                className={`rounded-md mb-4 px-8 py-2 ${
                    winner ? "bg-amber-500 text-black font-bold" : "bg-blue-500"
                } max-w-[274px] mx-2 text-white`}
            >
                {status}
            </p>
            <div className='grid grid-cols-3 max-w-[290px]'>
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [crntMove, setCrntMove] = useState(0);

    const currentSquares = history[crntMove];

    function handlePlay(nxtSquares) {
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, crntMove + 1), nxtSquares];
        setHistory(nextHistory);
        setCrntMove(nextHistory.length - 1);
    }

    function jumpTo(move) {
        setCrntMove(move);
        setXIsNext(move % 2 === 0);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `Goto the move #${move}`;
        } else {
            description = `Start the game`;
        }

        return (
            <li key={move}>
                <button
                    className='px-4 py-2 border bg-zinc-800 border-zinc-700 duration-300 hover:text-white hover:border-white w-full text-left'
                    onClick={() => jumpTo(move)}
                >
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className='flex justify-between'>
            <div className=''>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className='min-w-[200px]'>
                <h3 className='text-xl text-white/75'>History</h3>
                <ol className='mt-9 gap-2 flex flex-col'>{moves}</ol>
            </div>
        </div>
    );
}
