import { Fragment, useState } from "react";


const Navbar: React.FC<{ handleClick: (name: string) => void, handleClick2:(name: string) => void,handleClick5:(name: any) => void}> = ({
  handleClick,handleClick2,handleClick5
})  => {
    const highlighter = {
        color: '#0000EE',
        borderBottom: '1px solid #0000EE',
        cursor:"pointer"
    }
    const[btn1,setbtn1] = useState("theaters")
    const[btn2,setbtn2] = useState("comingsoon")
    const[btn3,setbtn3] = useState("ratedIndian")
    const[btn4,setbtn4] = useState("rated")
    const[btn5,setbtn5] = useState("favourite")
    const[highlightstate1,sethighlightstate1] = useState(Boolean);
    const[highlightstate2,sethighlightstate2] = useState(Boolean);
    const[highlightstate3,sethighlightstate3] = useState(Boolean);
    const[highlightstate4,sethighlightstate4] = useState(Boolean);
    const[highlightstate5,sethighlightstate5] = useState(Boolean);
    const getMovieData = (e:any)=>{
      e.preventDefault()
      handleClick2(e.target.value.toLowerCase())
    }
    const changeHighligh1t1:any = (e:any)=>{
      e.preventDefault()
      sethighlightstate1(true)
      sethighlightstate2(false)
      sethighlightstate3(false)
      sethighlightstate4(false)
      sethighlightstate5(false)
      setbtn1("theaters")
      handleClick(btn1)
      handleClick5(false)
    }
    const changeHighlight2:any = (e:any)=>{
      e.preventDefault()
      sethighlightstate1(false)
      sethighlightstate2(true)
      sethighlightstate3(false)
      sethighlightstate4(false)
      sethighlightstate5(false)
      setbtn2("comingsoon")
      handleClick(btn2)
      handleClick5(false)
    }
    const changeHighlight3:any = (e:any)=>{
      e.preventDefault()
      sethighlightstate1(false)
      sethighlightstate2(false)
      sethighlightstate3(true)
      sethighlightstate4(false)
      sethighlightstate5(false)
      setbtn3("ratedIndian")
      handleClick(btn3)
      handleClick5(false)
    }
    const changeHighlight4:any = (e:any)=>{
      e.preventDefault()
      sethighlightstate1(false)
      sethighlightstate2(false)
      sethighlightstate3(false)
      sethighlightstate4(true)
      sethighlightstate5(false)
      setbtn4("rated")
      handleClick(btn4)
      handleClick5(false)
    }
    const changeHighlight5:any = (e:any)=>{
      e.preventDefault()
      sethighlightstate1(false)
      sethighlightstate2(false)
      sethighlightstate3(false)
      sethighlightstate4(false)
      sethighlightstate5(true)
      setbtn5("favourite")
      handleClick(btn5)
      handleClick5(true)
    }
  return (
    <Fragment>
      <div className="nav">
        <div className="menu">
          <div style={highlightstate1 ? {...highlighter}:{cursor:"pointer"}} onClick={(e)=>changeHighligh1t1(e)}>
            <p>Movies in Theaters</p>
          </div>
          <div style={highlightstate2 ? {...highlighter}:{cursor:"pointer"}} onClick={(e)=>changeHighlight2(e)}>
            <p>Coming soon</p>
          </div>
          <div style={highlightstate3 ? {...highlighter}:{cursor:"pointer"}} onClick={(e)=>changeHighlight3(e)}>
            <p>Top Rated Indian</p>
          </div>
          <div style={highlightstate4 ? {...highlighter}:{cursor:"pointer"}} onClick={(e)=>changeHighlight4(e)}>
            <p>Top Rated Movies</p>
          </div>
          <div style={highlightstate5 ? {...highlighter}:{cursor:"pointer"}} onClick={(e)=>changeHighlight5(e)}>
            <p>Favorites</p>
          </div>
        </div>
        <div className="search">
          <div>
            <input
              onChange={(e)=>getMovieData(e)}
              placeholder="Search Movie"
              className="searchbox"
              type="text"
              name="search"
              id="search"
            />
          </div>
          <div className="search-btn">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;