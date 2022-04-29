import react, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main/Main";
import Populares from "./Components/Populares";
import ListMovie from "./ListMovie";
import ListMovies from "./ListMovies";
import Paginas from "./Components/Paginas/Paginas";



function App( { setPage,  numOfPages = 10} ) {
  



  return (
    <div>
      <Header />
      <Main />
      <Populares />
      
      
     
       
    </div>
  )
}

export default App;
