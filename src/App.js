import './App.css';
import { useState } from 'react';
import deleteIcon from "./x.svg"



function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleTask = () => {
    setList([...list, input])
    setInput("")
  }

  const handleUpdate = () => {
    list.splice(uid, 1, input);
    setInput("")
    setUpdate(false)
  }

  const handleDelete = (i) => {
    const filterlist = list.filter((elm) => elm !== list[i])
    console.log("filterlist", filterlist)
    setList(filterlist)
  }

  const handleEdit = (i) => {
    const filterlist = list.filter((elm) => elm === list[i])
    setInput(filterlist[0])
    setUid(i)
    setUpdate(true)
  }

  const handleDeleteAll = () => {
    setList([]);
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <hr />
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e) => handleInput(e)} placeholder='Enter Task' />
          {update ? <button className="myButton" onClick={handleUpdate}>Update</button> : <button className="myButton"  onClick={handleTask}>Add Task</button>} <button className="deleteAllButton" onClick={handleDeleteAll}>Delete All</button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i} className='itemlist'>
                {item}
                <div className='btn-cont'>
                <button className="editButton" onClick={() => handleEdit(i)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="deleteButton" onClick={() => handleDelete(i)}>
                  <i className="fas fa-trash"></i>
                </button>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;





  //   return (
  //     <div className="App">
  //       <h1>Todo App</h1>
  //       <div className="container">
  //         <div className="input-box">
  //           {/* <input type="text" value={input} onChange={(e)=>handleInput(e)} placeholder='Enter Task' /> <button onClick={handleTask}>Add Task</button> <button onClick={handleUpdate}>Update</button> */}
  //           <input type="text" value={input} onChange={(e)=>handleInput(e)} placeholder='Enter Task' /> {update ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleTask}>Add Task</button>} 
  //         </div>
  //         <div className="list">
  //           <ul>
  //           {/* <img src={deleteIcon} className='dlt-icon' alt="delete" onClick={()=>handleDelete(i)} /> */}
  //             {/* {list.map((item,i)=> <li key={i} className='itemlist'>{item} <button onClick={()=>handleDelete(i)}><i className="fas fa-trash"></i></button></li>)} */}
  //             {list.map((item,i)=> <li key={i} className='itemlist'>{item} <button onClick={()=>handleEdit(i)}><i className="fa-solid fa-pen-to-square"></i></button> <button onClick={()=>handleDelete(i)}><i className="fas fa-trash"></i></button></li>)}
  //              {/* <img src="{deleteIcon}" alt="delete" /> */}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default App;