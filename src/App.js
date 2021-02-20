//Hook de estado nos srive para almacenar datos y modificar
import React, {useState} from 'react'
import { isEmpty, size } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)

  const validForm = () => {
    let isValid = true
    setError(null)
    //NOS PERMITE VALIDAR SI UN CAMPO ESTA VACIO O NO ESTA VACIO
    if(isEmpty(task)){
      setError("You must enter a task.")
      isValid = false
    }

    return isValid
  }

  const addTask = (e) => {
    //nos permite no recaragr la pagina al darle en el submit
    e.preventDefault()
    if (!validForm()) {
      return
    }
    const newTask = {
      //ShortId  nos permite generar ids incrementables
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
  }

  const deleteTask = (id) => {
    //el filter nos permite filtrar las tareas y con esto poder eliminarlas del lienzo
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }

  const saveTask = (e) => {
    e.preventDefault()
    if(!validForm()){
      return
    }
    //maps nos permite iterar  cada elemento de un array
    const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : item )
    setTasks(editedTasks)
    
    setEditMode(false)
    setTask("")
    setId("")
  }

  return (
    <div className="container mt-5">
      <h1>Task</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
        {    
          size(tasks) == 0 ? (
            <li className="list-group-item">no scheduled tasks...</li>
          ) : (
            <ul className="list-group">
              {
                tasks.map((task) => (
                  <li className="list-group-item" key={task.id}>
                    <span className="lead">{task.name}</span>
                    <button 
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                    <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editTask(task)}
                    >
                      Edit
                    </button>
                  </li>
                ))
              }
            </ul>
          )
        }
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {editMode ? "Edit Task" : "Add Task"}
          </h4>

          <form onSubmit={editMode ? saveTask : addTask}>
            {
              error && <span className="text-danger">{error}</span>
            }
            
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="Enter task"
              //el onChange nos permite obtener el texto de un campo de texto y capturarlo con el settask
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />

            <button 
              className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} 
              type="submit"
            >
              {editMode ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
