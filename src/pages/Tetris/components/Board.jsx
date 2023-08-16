import "./Board.css";
import BoardCell from "./BoardCell";

export default function Board({ board }) {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };
  return (
    <div className="Board" style={boardStyles}>
      {board.rows.map((row, y) => {
        return row.map((cell, x) => {
          return <BoardCell key={(x * board.size.columns) / x} cell={cell} />;
        });
      })}
    </div>
  );
}
