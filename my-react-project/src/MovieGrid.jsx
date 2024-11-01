import MovieCard from "./MovieCard";

function MovieGrid(){
    const movies=[
        {id:1,name:"Bahubali",director:"Rajamouli"},
        {id:2,name:"saaho",director:"Sujeeth"},
        {id:3,name:"Salaar",director:"Prasanth neel"},
        {id:4,name:"kalki",director:"Nag ashwin"}
    ]

    return(
        <>
        {movies.map(m=>
            <MovieCard movie={m}/>
            ) }       
        </>
    )
    }
export default MovieGrid;