import  Pagination from '@mui/material/Pagination';
import React from 'react';
import './Paginas.css'



  export default function Paginas ({ setPage, numOfPage = 5 })  {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
        
    };



  return (
    
        <Pagination  className='pag'
            count={numOfPage}
            onChange={(e) => handlePageChange(e.target.textContent)} 
            color='secondary'
            style={{
              display:'block',
              marginInline:'-440px',
              marginBlock:'-300px',
              paddingInLineBlock:'100px',
              marginBottom:'100px',
              
              width:'100%',

            }} />
            
        
  
  )
};

