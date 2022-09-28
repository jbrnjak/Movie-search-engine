import { useState, useEffect  } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=acfeaa15';

const film1= {
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    const pretraziFilmove = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect (()=>{
        pretraziFilmove('Spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Pretražite filmove" value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}></input>
                <img src={SearchIcon} alt="search" onClick={() => pretraziFilmove(searchTerm)}/>

            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                   {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                   ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>Nisu pronađeni filmovi</h2>
                    </div>
                )
            }

           
            </div>
    );
}
export default App;