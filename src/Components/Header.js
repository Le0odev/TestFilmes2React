import react from "react";
import '../Components/Header.css'

export default function Header () {
    return (
        <div className="Header">
            <h1 onClick={() => window.scroll(0,0)} className="imdb">TMDB<input type='button'></input></h1>
        </div>
    )
}


