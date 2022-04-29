

const API_KEY = 'e6973726b4200b8caf4cf346f7a9694b';
const API_BASE = 'https://api.themoviedb.org/3'

/*
- FILMES POPULARES DO DIA (POPULAR)
- DETALHES DO FILME ESCOLHIDO


*/
const nextPage = (numberPage) => {
    fetch(`${API_BASE}/movie/popular?&language=pt-BR&api_key=${API_KEY}&page=${numberPage}`)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        this.setState({ currentPage: numberPage })
    })
}


const basicFetch = async (endpoint) => {
    
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;

    
}





export default {
    
    getHomeList: async () => {
        
        return [
            
            
            {
                slug: 'populares',
                title: 'populares do dia',
                items: await basicFetch(`/movie/popular?&language=pt-BR&api_key=${API_KEY}&page=1`),
            }
           
        ] 

        
    }
    
}