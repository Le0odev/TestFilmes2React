import React, { useEffect } from 'react'
import axios from 'axios'
import Populares from '../Populares';

import { Chip } from '@mui/material'
import { Pagination } from '@mui/material';
import color  from '@mui/system';
import './Main.css'


const API_KEY = 'e6973726b4200b8caf4cf346f7a9694b'


 const Filtros = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,

  
 }) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };



  const fetchGenres =  async () => {
    const { data } =(
    await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=pt-BR`)
    );
    setGenres(data.genres);
  }
    
  useEffect(() => {
    fetchGenres();

    return () =>{
      setGenres({})
    }
  }, [])
  
  


  return (
    <div className='center' style={{padding: '6px 0'}}>
      {selectedGenres && selectedGenres.map((genre) => (
      <Chip 
      style={{margin: '6px', 
        backgroundColor: '#FFFFFF', 
        display:'flex-box',
        padding: '8px 10px',
        borderRadius:'4px'}}
        key={genre.id}
          color="primary"
          clickable
          size="small"
          
      />))}

      {genres.map((genre) => (
        <Chip className='' style={{margin: '6px', 
        backgroundColor: '#FFFFFF', 
        display:'flex-box', 
        padding: '8px 10px',
        borderRadius:'4px',
        
        
        
        
        fonte: 'Roboto',
        color:'#323232',
        fontWeight: 'bold',


      
      
    }} 
    
    onClick={() => handleAdd(genre)}
    label={genre.name}
    key={genre.id}
    clickable
    
     />))}
      
    </div>
  )
}

export default Filtros