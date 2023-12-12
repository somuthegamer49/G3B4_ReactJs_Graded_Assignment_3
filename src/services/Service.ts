import axios from "axios";
const getAllMoviesComing = async()=> {
    const response = await axios.get("http://localhost:4000/movies-coming")
    return response.data;
}
const getAllMoviesInTheatres = async()=> {
    const response = await axios.get("http://localhost:4000/movies-in-theaters")
    return response.data;
}
const getAllMoviesTopRatedIndia = async()=> {
    const response = await axios.get("http://localhost:4000/top-rated-india")
    return response.data;
}
const getAllMoviesTopRated = async()=> {
    const response = await axios.get("http://localhost:4000/top-rated-movies")
    return response.data;
}
const getAllMoviesFavourite = async()=> {
    const response = await axios.get("http://localhost:4000/favourite")
    return response.data;
}

export {getAllMoviesComing,getAllMoviesInTheatres,getAllMoviesTopRatedIndia,getAllMoviesTopRated,getAllMoviesFavourite};