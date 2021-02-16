import React from 'react'

function App() {
  return (
    <div className="container mt-5">
      <h1>Task</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Task Name</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Delete</button>
              <button className="btn btn-warning btn-sm float-right">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form>
            <input type="text" className="form-control mb-2" placeholder="Enter task"/>
            <button className="btn btn-dark btn-block" type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
