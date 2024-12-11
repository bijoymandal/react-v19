import seriesData from "../api/seriesData.json";
import { EventHandling } from "./EventHandling";
import { EventProps } from "./EventProps";
import { DerivedState } from "./hooks/DerivedState";
import { LiftingState } from "./hooks/LitStateUp";
import { State } from "./hooks/State";
import { ProfileCard } from "./Profile";
import { SeriesCard } from "./SeriesCard";



export const NetflixCode = () => {
    const course = "Development course";
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
        <ul className="flex flex-row gap-2 p-2">
            {
              
                seriesData.map((curElem)=>(  
                  <SeriesCard key={curElem.id} curElem={curElem}></SeriesCard>)  
                )}           
        </ul>
        <ProfileCard></ProfileCard>
        <EventHandling/>
        <EventProps />
        <State />
        <DerivedState/>
        <LiftingState/>
      </>
    );
  };


  const Footer = ()=>{
    return(
      <>
          <p>@copyright</p>
      </>
    );
  };
  export default Footer;