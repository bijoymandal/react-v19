// import Footer,{ NetflixCode } from "./components/NetflixSeries";
// import { Pratices } from "./Pratices";

import { Challenge } from "./components/hooks/useState/Challenge"
import { ShortCircuit } from "./components/ShortCircuit"
import { Todo } from "./projects/Todo/Todo"
// import { ToggleSwitch } from "./projects/TogleSwitch/ToggleSwitch"

function App() {

  return (
    <>  
        {/* React Fragment */}
        This is used React Js and Javascript Projects
        {/* React Component  */}
        {/* <NetflixCode/>    */}
        {/* <Pratices /> */}
        {/* <Footer/> */}

        {/* <ToggleSwitch/> */}
        <Todo/>
        <ShortCircuit/>
        <Challenge/>
    </>
  )
}




export default App
