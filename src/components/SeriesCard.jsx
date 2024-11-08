export const SeriesCard = ({curElem}) => {
    // console.log(curElem);
    {/*props data using data fetch and reusable */}

    {/* destructing of props data */}
    const {img_url,name,rating,description,match_url,generic} = curElem;
    return (
        <li>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            <h2>Name:{name}</h2>
            <h3>Rating:{rating}</h3>
            <p>Summary:{description}</p>
            <p>Genre: {generic}</p>
            <a href={match_url} target="_blank">Watch Now</a>
            {/* <button>Watch Now</button> */}
        </li>
    );
};