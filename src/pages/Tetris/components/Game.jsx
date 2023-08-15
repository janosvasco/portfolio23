import Menu from "./Menu";
import useGameOver from "../hooks/useGameOver";
import Tetris from "./Tetris";

export default function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    resetGameOver();
  }
  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}
