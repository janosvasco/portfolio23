import "./BoardCell.css";

export default function BoardCell({ cell }) {
  return (
    <div className={`BoardCell ${cell.className}`}>
      <div className="Sparkle"></div>
    </div>
  );
}
