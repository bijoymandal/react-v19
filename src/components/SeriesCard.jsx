import style from "./Netflix.module.css";



{/*
    note : 
    In javascript className like card-content
    how to use in module in dot operator 
    className={style.card-content} // not like that 
    className={style["card-content"]} // this s perfect answer in javascript 
    other wise change in style sheet css class like this card_content     
    
    
*/}


export const SeriesCard = ({curElem}) => {
    // console.log(curElem);
    {/*props data using data fetch and reusable */}

    {/* destructing of props data */}
    const {img_url,name,rating,description,match_url,generic} = curElem;

    const btnStyle= {
        padding:"0.2rem 1.2rem",
        border:"none",
        fontSize:"1.2rem",
        color:"#000000",
        textDecoration:"none",
        backgroundColor:"blue",
        marginTop:"2px"
    }

    

    return (
        <li className="bg-gray-200 p-2">
        {/* <li className="style.card"> */}   {/* css module use this type*/}
            <div>
                <img src={img_url} alt={name} width="100%" height="40%" />
            </div>
            <h2>Name:{name}</h2>
            <h3 style={{ margin:"1.2rem 0" }}>Rating:
                
                <span className={`rating ${rating>=8.5 ? 'super_hit':'average'}`}>{rating }</span>

            </h3>
            <p>Summary:{description}</p>
            <p>Genre: {generic}</p>
            <a href={match_url} style={btnStyle} target="_blank" className="mt-3">Watch Now</a>
            {/* <button>Watch Now</button> */}
        </li>
    );
};