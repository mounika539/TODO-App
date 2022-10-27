import './App.css';
import trash from './trash.svg'
import React,{useState} from 'react';

function App() {
 const [taskInput,taskUpdate]=useState("")
 const [toDoList,updateToDoList]=useState([])
 const addNote=()=>{
         toDoList.push({description:taskInput,isComplete:false})
         updateToDoList(toDoList)
         taskUpdate(" ")
 }
 const inputKeyDown=(event)=>{
   if(event.keyCode===13)
   {
      addNote();
   }
}

  const deleteTask=(index)=>{
  const newToDoList= toDoList.filter((item,i)=>i!==index);
  updateToDoList(newToDoList)
 }
 const markComplete=(index)=>{
   const list= [...toDoList];
   list[index].isComplete=!list[index].isComplete;
   updateToDoList(list)
  }
  return (
    <div className='App-background'>
      <header >
      <p className='header'>TODO LIST</p>
      </header>
     <div className='task-container'>
        <div>
            <input className='text-input' value={taskInput}  onKeyDown={inputKeyDown} onChange = {(event) => taskUpdate(event.target.value) }/>
            <button className='Add-button' onClick={addNote} >Add</button>

        </div>
        {toDoList?.length ? toDoList.map((toDoObject,index)=>
        
        <ListItem index={index} itemData={toDoObject} deleteTask={deleteTask}  markComplete={markComplete}/>):

        <p className='Add-item'> Add any task!!</p>}
        
     </div>
    </div>
  );
}
function ListItem(props){
   return(
   <div className='list-item row jc-space-between' >
      <span className={props.itemData.isComplete?"task-complete":""}
       onClick={()=>props.markComplete(props.index)}>{props.itemData.description}</span>
      <img className='delete-icon' src={trash} alt='trash-bin' 
      onClick={()=>props.deleteTask(props.index)}/>   
   </div>
   )
}
export default App;
