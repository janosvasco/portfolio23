import "./Tetris.css";
import Board from "./Board";
import { useBoard } from "../hooks/useBoard";

export default function Tetris({ rows, columns, setGameOver }) {
  return <Board />;
}
