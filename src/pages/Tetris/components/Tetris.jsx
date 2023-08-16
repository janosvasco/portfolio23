import "./Tetris.css";
import Board from "./Board";
import GameStats from "./GameStats";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";

export default function Tetris({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="Tetris">
      <Board board={board} />;
      <GameStats gameStats={gameStats} />
    </div>
  );
}
