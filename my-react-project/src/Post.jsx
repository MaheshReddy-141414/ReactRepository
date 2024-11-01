import Postbody from "./Postbody";
import Posttitle from "./Posttitle";

function Post({title,body}){
    return(
        <>
        <Posttitle a={title}/>
        <Postbody b={body}/>
        </>
        
    )
}
export default Post;