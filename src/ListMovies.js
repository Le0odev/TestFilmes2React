import React from 'react';
import './ListMovie.css'



const ListMovies = ({
    id,
    title,
    poster,
    date,
}) => {
  return <div className='lol'>
      <section className="card-list">
                       
                       <div className="list" > 
                       <img src={`http://image.tmdb.org/t/p/w300${poster}`}></img>
                       <h3>{title}</h3>
                       <h5>{date}</h5>
                       </div>
                   </section>
  </div>;
};


export default ListMovies
