export default function Workingwithevent()
{
    let showmsg=()=>
    {
        alert("hello world")
    }
    return(
        <>
        <div>Working with event</div>
        <input type="button" value="Click here" onClick={()=>showmsg()}/>
        </>
    )
}