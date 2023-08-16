import "./App2.css";
import Game from "./components/Game";

export default function Tetris() {
  return (
    <div className="Tetris">
      <Game rows={20} columns={10} />
    </div>
  );
}
