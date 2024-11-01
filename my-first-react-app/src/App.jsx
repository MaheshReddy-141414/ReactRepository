// import { Fragment } from "react";

// function App(){

//   return(
//     <react:Fragment>
//     <h1>Hii welcome to react classes</h1>
//     <h1>Hii welcome to react classes</h1>
//     <h1>Hii welcome to react classes</h1>
//     </react:Fragment>
//   )
// }
// export default App;

function App()
{
  const items = [
    {id:1,name:"chicken",category:"nv"},
    {id:2,name:"mutton",category:"nv"},
    {id:3,name:"fruits",category:"nv"},
    {id:1,name:"vegetables",category:"nv"}
  ];

  const vegitems=items.filter(item=>item.category=="veg")

  const listitems=items.map(item=>
  (<li key={item.id} style={{color:item.category=="v"?"green":"red"}}>ID ={item.id},Name ={item.name},Category ={item.category}</li> )
  )

  return(
    <>
    <h1>Items List</h1>
    <ul>{vegitems.lenght>0?listitems:"veg items not available"}</ul>
    </>
  )
}
export default App; 