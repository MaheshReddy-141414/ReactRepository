import { useState } from "react"

 function Buttons(){
   const [count,setCount]=useState(0)
   const increment=()=>{
   setCount(count+1)
   }
   const decrement=()=>{
     setCount(count-1)
   }
   return(
     <>
     <h1>This is counter value:{count}</h1>
     <button style={{color:"green", backgroundColor:"lightblue"}} onClick={increment}>Increment</button>
     <button style={{color:"red", backgroundColor:"lightblue"}} onClick={decrement}>Decrement</button>
     </>
   )
 }
 export default Buttons;