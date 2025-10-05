import { useState } from 'react'

function App() {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXNext,setIsXNext]=useState(true);
  const winner=calculateWinner(board);
  function handleClick(index){
    if(board[index]||winner)
      return;
    const newBoard=[...board];
    newBoard[index]=isXNext?"X":"O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }
  function restartGame(){
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 flex items-center justify-center text-2xl font-bold border-2 border-gray-700 bg-white hover:bg-gray-200">
            {value}
          </button>
        ))}
      </div>
      <div className="mt-4 text-xl">
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>
      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Restart
      </button>
    </div>
    </>
  );
}
function calculateWinner(squares){
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App
