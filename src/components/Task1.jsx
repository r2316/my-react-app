import React,{useRef,useState} from "react";

export default function Task1(){
    let taskref = useRef()
    const[taskarray,settarray]=useState([])
    const [taskui,settaskui]=useState()
    let Addtask=()=>
    {
        if(taskarray.findIndex((task)=>task.taskname==(taskref.current.value))>=0)
        {
            alert("Task already present")
            return
        }
            let task={taskname:taskref.current.value,taskstatus:"incomplete"}
            
            taskarray.push(task)
            console.log(taskarray)
            taskref.current.value=""
            showtask()
    }

    let updateTask=(t)=>
    {
        let i=taskarray.findIndex((task)=>(task.taskname==t))
        if(i<0)
        {
            return
        }
        taskarray[i].taskstatus="complete"
    
        showtask()
    }
    let showtask=()=>
 {
    let temparry=taskarray.map((t)=>{
        let colorname="orange"
        if(t.taskstatus=="complete")
        {
            colorname="yellowgreen"
        }
        return<tr style={{backgroundColor:colorname}}>
            <td>{t.taskname}</td>
            <td>{t.taskstatus}</td>
            <td><input type="button" value="complete" onClick={()=>updateTask(t.taskname)}></input></td>
            <td><input type="button" value="delete" onClick={()=>deletetask(t.taskname)}></input></td>
        </tr>
    })
    settaskui(temparry)
 }
let deletetask=(taskname)=>
{
    let index = taskarray .findIndex((t)=>t.taskname==taskname)
    taskarray.splice(index,1)
    showtask()
}

 return(
    <div>
        <div>Enter Task: <input type="text" ref={taskref}></input>
        <input type="button" value="add" onClick={()=>addtask()}></input>
        </div>

        <table>
            <thead>
                <tr>
                <th>TaskName</th>
                <th>Task status</th>
                <th>Mark complete</th>
                <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {taskui}
            </tbody>
        </table>
    </div>
 )
}