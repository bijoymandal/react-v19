import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixCode = () => {
    const course = "Developent course";
    const userName=()=>{
      const name = "UserName";
      return name;
    };
    let age = 18;
    return (
      <>
        <h1>This Is Web {course} {1+2+3}</h1>
        <p>This course fallowed by a {userName()} </p> {/*use function dynamic*/}
        <button>{age >=18 ? 'Watch now':'Available' }</button>
        <ul>
            {
              
                seriesData.map((curElem)=>(  
                  <SeriesCard key={curElem.id} curElem={curElem}/>)  
                )}           
        </ul>
      </>
    );
  };

  const Footer = ()=>{
    return(<>
        <p>@copyright</p>
    </>);
  };
  export default Footer;