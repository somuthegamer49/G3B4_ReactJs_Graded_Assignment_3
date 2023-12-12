
import { Fragment } from 'react';
import model from '../model/model';

const ImageMovie = (props:{handleClick8:(name:any) => void, movie:model|undefined})=>{

  const imgMovie = {
      ...props.movie
  }
    return (
        <Fragment>
        <p style={{color: "#0000EE",cursor: "pointer"}} onClick={(e)=>props.handleClick8(false)}>Back To Home</p>
        <div className="movieclick">
          <div className="movie">
            <div>
              <div className="image2" style={{backgroundImage: `url(${imgMovie.posterurl})`}}></div>
            </div>
            <div className="movie-content">
              <h1>{imgMovie.title}</h1>
              <div className="details">
                <table>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Imdb Rating</td>
                    <td style={{whiteSpace: "nowrap"}}>{String(imgMovie.imdbRating)}</td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Content Rating</td>
                    <td style={{whiteSpace: "nowrap"}}>{imgMovie.contentRating}</td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Average Rating</td>
                    <td style={{whiteSpace: "nowrap"}}>{imgMovie.contentRating}</td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Duration</td>
                    <td style={{whiteSpace: "nowrap"}}>{imgMovie.duration}</td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Generes</td>
                    <td style={{whiteSpace: "nowrap"}}>{imgMovie.genres?.map((item)=>{
                        return item+" "
                    })}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td style={{whiteSpace: "nowrap"}}>{imgMovie.actors?.map((item)=>{
                        return item+" "
                    })}</td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Release Date</td>
                    <td style={{whiteSpace: "nowrap"}}>{String(imgMovie.releaseDate)}</td>
                  </tr>
                  <tr>
                    <td style={{whiteSpace: "nowrap"}}>Story Line</td>
                    <td className="story">
                    {imgMovie.storyline}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
    )
}

export default ImageMovie;