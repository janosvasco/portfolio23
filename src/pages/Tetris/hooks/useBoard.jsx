import { useState } from "react";
import { buildBoard } from "../business/Board";

export function useBoard({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) {
  const [board] = useState(buildBoard({ rows, columns }));
  return [board];
}
