function Currentdate(){
    const now = new Date;
    const currentdate = now.toDateString();
    const currenttime = now.toLocaleTimeString();
    return(
        <>
        <h1>current date:{currentdate}</h1>
        <h1>current time:{currenttime}</h1>
        </>
    )
}
export default Currentdate;