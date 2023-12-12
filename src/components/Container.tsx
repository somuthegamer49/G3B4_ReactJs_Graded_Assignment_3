import { Fragment, useEffect, useState} from "react";
import model from './../model/model';


const Container = (props:{props:model[],searchprops:model[],handleClick3:(e:any,name1: model,name2:any) => void,
  favstate:any,handleClick6:(e:any,name1: model,name2:any) => void, 
  faverror:any,favPopup:any,favDelpopup:any,handleClick7:(name:any) => void}) => {
    
  const [boolpopup,setboolpopup] = useState(false)
  const [booldelpopup,setdelboolpopup] = useState(false)
  let [count,setcount] = useState(0)
  useEffect(()=>{
    setboolpopup(props.favPopup)
    if(boolpopup){
      setcount(count+1)
    }
  },[props.favPopup])
  useEffect(()=>{
    setdelboolpopup(props.favDelpopup)
    if(booldelpopup){
      setcount(count+1)
    }
  },[props.favDelpopup])

  useEffect(()=>{
    if(count>=1){
    setTimeout(()=>{ 
      setcount(0)
    },4000)
  }
  },[count])

    return(<Fragment>
      <h1>Movies</h1>
      <div className="popup">
      {props.faverror!==500&&boolpopup?Array(count).fill(0).map((_, i) => (
        <div>
          <div key={i} className="pop" style={{display: "inline-block"}}>
                <p style={{color: "green"}}>Success!</p>
                <p>Added To Favourites</p>
            </div>
        </div>
      )):boolpopup&&props.faverror===500?Array(count).fill(0).map((_, i) => (
        <div>
          <div key={i} className="pop" style={{display: "inline-block"}}>
                <p style={{color: "red"}}>Oops!</p>
                <p>Already Added</p>
            </div>
        </div>
      )):booldelpopup?Array(count).fill(0).map((_, i) => (
        <div>
          <div key={i} className="pop" style={{display: "inline-block"}}>
                <p style={{color: "green"}}>Successfully Deleted!</p>
                <p>Movie Deleted</p>
            </div>
        </div>
      )):null}
    </div>
      <div className="container">
        {props.searchprops.length===0?props.props.map((item)=>{
            return(
                <div className="card">
                <div
                  className="image" onClick={(e)=>props.handleClick7(item)}
                  style={{ backgroundImage: `url(${item.posterurl})`,cursor:"pointer"}}
                ></div>
                <h4 style={{ marginLeft: "1em" }}>{item.title}</h4>
                <p style={{ textAlign: "center" ,cursor: "pointer"}} onClick={props.favstate?(e)=>props.handleClick6(e,item,!booldelpopup):(e)=>props.handleClick3(e,item,!boolpopup)}>
                <Fragment>{props.favstate ? "Remove From Favourite" : "Add To Favourite"}</Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="fav"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </p>
              </div>
            )
        }):props.searchprops.map((item)=>{
          return(
              <div className="card">
              <div
                className="image" onClick={(e)=>props.handleClick7(item)}
                style={{ backgroundImage: `url(${item.posterurl})`,cursor:"pointer"}}
              ></div>
              <h4 style={{ marginLeft: "1em" }}>{item.title}</h4>
              <p style={{ textAlign: "center",cursor: "pointer" }} onClick={props.favstate?(e)=>props.handleClick6(e,item,!booldelpopup):(e)=>props.handleClick3(e,item,!boolpopup)}>
              <Fragment>{props.favstate ? "Remove From Favourite" : "Add To Favourite"}</Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="fav"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </p>
            </div>
          )
      })}
      </div>
    </Fragment>
  );
};

export default Container;
