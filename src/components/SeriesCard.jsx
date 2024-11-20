import style from "./Netflix.module.css";
import styled from "styled-components";


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
    {/* button styles */}
    
    
    // const btnStyle= {
    //     padding:"0.2rem 1.2rem",
    //     border:"none",
    //     fontSize:"1.2rem",
    //     color:"#000000",
    //     textDecoration:"none",
    //     backgroundColor:"blue",
    //     marginTop:"2px"
    // }
    
    
    {/* button props */}
    
    // const buttonStyle = style.button({
    //     padding:"0.2rem 1.2rem",
    //     border:"none",
    //     fontSize:"1.2rem",
    //     color:"#000000",
    //     textDecoration:"none",
    //     backgroundColor:"blue",
    //     marginTop:"2px"
    // }); 
    {/* style component using create button style and tag use */}
    
    // const ButtonStyle = styled.button({
    //     padding:"0.2rem 1.2rem",
    //     border:"none",
    //     fontSize:"1.2rem",
    //     color:"#000000",
    //     textDecoration:"none",
    //     backgroundColor:"blue",
    //     marginTop:"2px"
    // });

    const ButtonStyleTemp = styled.button`
        padding:0.2rem 1.2rem;
        border:none;
        font-size:1.2rem;
        color:#000000;
        text-decoration:none;
        background-color:blue;
        margin-top:2px;
        cursor:pointer;
    `
    const Rating = styled.h3`
        font-size:1.6rem;
        color:#7dcea0;
        text-transform:capitalize;
    `

    return (
        <li className="bg-gray-200 p-2">
        {/* <li className="style.card"> */}   {/* css module use this type*/}
            <div>
                <img src={img_url} alt={name} width="100%" height="40%" />
            </div>
            <h2>Name:{name}</h2>
            <Rating style={{ margin:"1.2rem 0" }}>Rating:
                
                <span className={`rating ${rating>=8.5 ? 'super_hit':'average'}`}>{rating }</span>

            </Rating>
            <p>Summary:{description}</p>
            <p>Genre: {generic}</p>
            {/* <a href={match_url} style={buttonStyle} target="_blank" className="mt-3">Watch Now</a> */}
            {/* <button>Watch Now</button> */}
            {/* <ButtonStyle>Watch Now</ButtonStyle> */}
            <ButtonStyleTemp rating={rating}>Watch Now</ButtonStyleTemp>
        </li>
    );
};