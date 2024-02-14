import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg'
import Moviecard from "./Moviecard.jsx";

// 522ad3e5  got this key from omdbapi
const API_URL = 'http://www.omdbapi.com?apikey=522ad3e5'

// const movie1 = {
//     "Title": "Oppenheimer",
//     "Year":"2023",
//     'imdbID': "qwdwbdwbhd",
//     "Type":"movie",
//     "Poster":"N/A"
// }
// above used for sample json purpose

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log('data==',data.Search)
        setMovies(data.Search)
    }

    useEffect(() => {
        searchmovies('spiderman');
    },[])

    return (
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input 
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={searchIcon}
            alt="search"
            onClick={() => searchmovies(searchTerm)}
            />
        </div>
        {movies?.length > 0 ? (
            <div className="container">
            {movies.map((movies) => (
            <Moviecard movie1={movies} />
            ))}
            </div>) : (
        <div className="empty">
            <h2>No movies found</h2>
        </div>
        )}
    </div>
    );
};

export default App

