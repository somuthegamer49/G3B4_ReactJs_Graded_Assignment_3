import { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import model from "../model/model";
import {
  getAllMoviesComing,
  getAllMoviesFavourite,
  getAllMoviesInTheatres,
  getAllMoviesTopRated,
  getAllMoviesTopRatedIndia,
} from "../services/Service";
import axios from "axios";
import ImageMovie from "./ImageMovie";

const Home: React.FC<{ handleClick: (name: string) => void}> = ({
  handleClick,
}) => {
  const [btn, setbtn] = useState("theaters");
  const [faverror, setfaverror] = useState(Number);
  const [props, setprops] = useState<model[]>([]);
  const [favPopup, setfavPopup] = useState(false);
  const [favdelPopup, setfavdelPopup] = useState(false);
  const [imageClicked, setimageClicked] = useState(false);
  const [imageClickMovie, setimageCLickMovie] = useState<model>();
  const [favstate, setfavstate] = useState(false);
  const [favouritemovie, setfavouritemovie] = useState<model>();
  const [deletemovie, setdeletemovie] = useState<model>();
  const [searchprops, searchsetprops] = useState<model[]>([]);
  const [movieComing, setmovieComing] = useState<model[]>([]);
  const [movieInTheaters, setmovieInTheaters] = useState<model[]>([]);
  const [movieTopRated, setmovieTopRated] = useState<model[]>([]);
  const [movieTopRatedInIndia, setmovieTopRatedInIndia] = useState<model[]>([]);
  const [movieFavourite, setmovieFavourite] = useState<model[]>([]);
  let movieData = (data: any) => {
    let arr: model[] = [];
    props.forEach((item) => {
      if (item.title.toLowerCase().includes(data)) {
        arr.push(item);
        searchsetprops(arr);
      }
      if (data === "") {
        searchsetprops([]);
      }
    });
  };
  useEffect(() => {
    const getMovies = async () => {
      const data = await getAllMoviesComing();
      setmovieComing(data);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getAllMoviesInTheatres();
      setmovieInTheaters(data);
      setprops(data);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getAllMoviesTopRated();
      setmovieTopRated(data);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getAllMoviesTopRatedIndia();
      setmovieTopRatedInIndia(data);
    };
    getMovies();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getAllMoviesFavourite();
      setmovieFavourite(data);
    };
    getMovies();
  }, []);
  interface Props {
    handleClick: (name: string) => void;
  }
  interface Props {
    handleClick2: (name: any) => void;
  }
  interface Props {
    handleClick3: (name: any) => void;
  }
  interface Props {
    handleClick4: (name: any) => void;
  }
  interface Props {
    handleClick5: (name: any) => void;
  }
  interface Props {
    handleClick6: (name: any) => void;
  }
  interface Props {
    handleClick7: (name: any) => void;
  }
  interface Props {
    handleClick8: (name: any) => void;
  }
  let getBackfromImg = (data:any)=>{
    setimageClicked(false)
  }
  let imageClick = (data: any) => {
    setimageCLickMovie(data);
    setimageClicked(true);
  };
  let getFav = (data: any) => {
    setfavstate(data);
  };
  let getNavdData = (data: string) => {
    setbtn(data);
  };
  let getdeletemovie = (e: any, data1: model, data2: any) => {
    e.preventDefault();
    setdeletemovie(data1);
    setfavdelPopup(data2);
  };
  useEffect(() => {
    const delMovies = async () => {
      if (deletemovie) {
        await axios.delete(
          `http://localhost:4000/favourite/${deletemovie.id}`,
          {}
        );
      }
    };
    delMovies();
  }, [deletemovie]);
  let getfavouritemovie = (e: any, data1: model, data2: any) => {
    e.preventDefault();
    setfavouritemovie(data1);
    setfavPopup(data2);
  };
  useEffect(() => {
    const postMovies = async () => {
      if (favouritemovie) {
        await axios
          .post(`http://localhost:4000/favourite/`, {
            ...favouritemovie,
          })
          .then((response) => {
            if (response.status === 201) {
              setfaverror(0);
            }
          })
          .catch((error) => {
            if (error.response.status === 500) {
              setfaverror(error.response.status);
            }
          });
      }
    };
    postMovies();
  }, [favouritemovie]);
  useEffect(() => {
    if (btn === "theaters") {
      setprops(movieInTheaters);
    }
  }, [movieInTheaters, btn]);
  useEffect(() => {
    if (btn === "comingsoon") {
      setprops(movieComing);
    }
  }, [movieComing, btn]);
  useEffect(() => {
    if (btn === "rated") {
      setprops(movieTopRated);
    }
  }, [movieTopRated, btn]);
  useEffect(() => {
    if (btn === "ratedIndian") {
      setprops(movieTopRatedInIndia);
    }
  }, [movieTopRatedInIndia, btn]);
  useEffect(() => {
    if (btn === "favourite") {
      setprops(movieFavourite);
    }
  }, [movieFavourite, btn]);

  return (
    <Fragment>
      {imageClicked ? (
        <ImageMovie movie={imageClickMovie} handleClick8={getBackfromImg}/>
      ) : (
        <Fragment>
          <Navbar
            handleClick={getNavdData}
            handleClick2={movieData}
            handleClick5={getFav}
          />
          <Container
            props={props}
            searchprops={searchprops.length > 0 ? searchprops : []}
            handleClick3={getfavouritemovie}
            favstate={favstate}
            handleClick6={getdeletemovie}
            faverror={faverror}
            favPopup={favPopup}
            favDelpopup={favdelPopup}
            handleClick7={imageClick}
          />
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
