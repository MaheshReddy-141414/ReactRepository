function Dateandtime(){

    const now = new Date();
    const date = now.getDate();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();

    const monthindex = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
    const dayindex = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

    const days = dayindex[day];
    const months = monthindex[month];
    function getSuffix(date){
        if(date===1||date===21||date===31)
            return 'st';
        else if(date===2||date===22)
            return 'nd';
        else if(date===3||date===23)
            return 'rd';
        return 'th'
    }
    const get = getSuffix(date)
    return(
        <>
        <h1>Today:{days}</h1>
        <h1>Date:{date}{get}</h1> 
        <h1>Month:{months}</h1>
        <h1>Year:{year}</h1>
        </>
    )
}
export default Dateandtime;