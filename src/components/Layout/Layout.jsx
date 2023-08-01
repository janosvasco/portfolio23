import './layout.css'
import Navbar from "../Right-side/Navbar";
import { navTexts } from "../../constants"
import Header from '../Header/Header';

export default function Layout() {


    return (
        <>
            <Header />
            {navTexts.map((text, id) => {
                return (
                    <div
                        className="section"
                        id={text}
                        key={id}
                        data-label={text}><p>{text}</p>
                    </div>)
            })}
            <Navbar />
        </>
    )
} 
