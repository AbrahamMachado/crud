//Hook de estado nos srive para almacenar datos y modificar
import React, {useState} from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    //nos permite no recaragr la pagina al darle en el submit
    e.preventDefault()
    //NOS PERMITE VALIDAR SI UN CAMPO ESTA VACIO O NO ESTA VACIO
    if(isEmpty(task)){
      console.log("Task empty")
    }

    const newTask = {
      //ShortId  nos permite generar ids incrementables
      id: shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])

    setTask("")
  }


  return (
    <div className="container mt-5">
      <h1>Task</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">

            {
              tasks.map((task) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">Delete</button>
                  <button className="btn btn-warning btn-sm float-right">Edit</button>
                </li>
              ))
            }
            
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input 
            type="text" 
            className="form-control mb-2" 
            placeholder="Enter task"
            //el onChange nos permite obtener el texto de un campo de texto y capturarlo con el settask
            onChange={(text) => setTask(text.target.value)}
            value={task}
            />
            <button 
            className="btn btn-dark btn-block" 
            type="submit"
            >
              Agregar
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
