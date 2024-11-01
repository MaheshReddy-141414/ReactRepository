import { useState } from "react"

 function Cricketscore(){
   const [score,setScore]=useState(0)
   const [s,setS]=useState(0)
   return(
     <>
     <h1>Cricket Score:{score}/{s}</h1>
     <button style={{color:"violet", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(score+1)}}>+1</button>
     <button style={{color:"indigo", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(score+2)}}>+2</button>
     <button style={{color:"blue", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(score+3)}}>+3</button>
     <button style={{color:"green", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(score+4)}}>+4</button>
     <button style={{color:"yellow", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(score+5)}}>+5</button>
     <button style={{color:"orange", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(score+6)}}>+6</button>
     <button style={{color:"red", backgroundColor:"ButtonHighlight"}} onClick={()=>{setScore(0)}}>Reset</button>
     <button style={{color:"black"}} onClick={()=>{setS(s+1)}}>OUT</button>
     </>
   )
 }
 export default Cricketscore;