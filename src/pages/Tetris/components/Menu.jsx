import "./Menu.css";

export default function Menu({ onClick }) {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Új Játék
      </button>
    </div>
  );
}
