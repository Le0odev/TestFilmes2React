import React, { useEffect, useState } from "react";
import axios from "axios";

import ListMovie from "../ListMovie";
import '../ListMovie.css'
import  Paginas  from "./Paginas/Paginas";
import './Paginas/Paginas.css'




const API_KEY = 'e6973726b4200b8caf4cf346f7a9694b';
const API_BASE = 'https://api.themoviedb.org/3'


const Populares = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    

    const fetchTrending = async () => {
     const { data } = await axios.get(`${API_BASE}/movie/popular?&language=pt-BR&api_key=${API_KEY}&page=${page}&limit=18`
     );
        //console.log(data.results)
       
        setContent(data.results);
       
    }

    useEffect(() => {
        fetchTrending();
    }, [page])

    return (
        <div>
            

            <div className="moviePage">
                {content && content.map((c) => <ListMovie key={c.id} id={c.id} 
                poster={c.poster_path} title={c.title} date={c.release_date} vote={c.vote_average} />)}
                
            </div>
            <div>
            <Paginas className='numerosPage' 
            style={{Margin: '300px'}}
            
            setPage={setPage}/>
            </div>
            
        </div>  
    )



     
};

export default Populares


