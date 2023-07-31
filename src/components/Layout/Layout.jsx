import './layout.css'
import Navbar from "../Right-side/Navbar";
import { navTexts } from "../../constants"

export default function Layout() {
    return (
        <>
            Janos Vasco Portfolio
            {navTexts.map((text, id) => {
                return <div className="section" id={text} key={id} data-label={text}>{text}</div>
            })}
            <Navbar />
        </>
    )
}