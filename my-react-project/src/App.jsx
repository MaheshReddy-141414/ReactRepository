 import AboutUs from "./AboutUs";
 import ContactUs from "./ContactUs";
 import Greeting from "./Greeting";

import { useState } from "react";
import Increment from "./Increment";
import Buttons from "./Buttons";
import Cricketscore from "./Cricketscore";
import Apples from "./Apples";
import Discount from "./Discount";
import Blog from "./Blog";
import Colour from "./Colour";
import MovieGrid from "./MovieGrid";
import Apps from "./Apps";
import Date from "./Dateandtime";
import Currentdate from "./CurrentDate";

 function App(){
   return(
     <>
     <h1>hii welcome to class</h1>
     <p>react is going on </p>

     <AboutUs/>
     <ContactUs/>
     <Greeting/>
     <Increment/>
     <Buttons/>
     <Cricketscore/>
     <Apples/>
     <Discount/>
     <Blog/>
     <Colour/>
     <MovieGrid/>
     <Apps/>
     <Date/>
     <Currentdate/>
     </>
   )
 }
 export default App;