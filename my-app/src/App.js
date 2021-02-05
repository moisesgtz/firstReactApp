import React, { useState, useEffect } from "react";

const App = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  return (
    <div>
      <div className="board-row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="board-row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </div>
  );
};

const style = {
  background: "lightblue",
  border: "1px solid black",
  fontSize: "40px",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

const handleClick = (i) => {
  const boardCopy = [...board];
  // If user click an occupied square or if game is won, return
  if (winner || boardCopy[i]) return;
  // Put an X or an O in the clicked square
  boardCopy[i] = xIsNext ? "X" : "O";
  setBoard(boardCopy);
  setXisNext(!xIsNext);
};

export default App;
