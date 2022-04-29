import React, { useState } from "react";
import './Main.css'
import Filtros from "./Filtros";


export default function Main() {
    const [selectedGenres, setSelectedGenres] = ([]);
    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState([])


   return (
       
       <section className="main">
        <div className="main-text">
           
           <h2 className="texto1">Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
           <br/>
           <h4>FILTRE POR:</h4>
           </div>
        
        <div className="main-filtros">
        <Filtros 
            type="movie"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
            
            
            
            />
        </div>


        

        
        
          
             
         
           
       </section>
   ) 
}