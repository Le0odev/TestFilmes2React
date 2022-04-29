import react, { useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
import './App.css'
import './ListMovie.css'



export default function ({title, poster, date, vote}) {
    return (
        <div>
                    

         
          <section className="card-list">
                <Badge className="badge" badgeContent={vote} color={vote>6? 'primary' : 'secondary'} />
                <div className="list" >
                <img src={`http://image.tmdb.org/t/p/w300${poster}`}></img>
                <h3>{title}</h3>
                <h5>{date}</h5>
        
        </div>
           </section>
    </div>
    )
}