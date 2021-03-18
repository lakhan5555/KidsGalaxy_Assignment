import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddTask = () => {
  let history = useHistory();
  const [task, setTask] = useState({
    task_title: "",
    due_date: "",
    employee_name: "",  
    employee_email: "",
    employee_phone: ""
  });

  const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  

  const { task_title, due_date, employee_name, employee_email, employee_phone } = task;
  const onInputChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    var csrftoken = getCookie('csrftoken')
    await axios.post("http://127.0.0.1:8000/api/task-create/", task,{
    headers: {
      'Content-type': 'application/json',
      'X-CSRFToken': csrftoken,
    }
  });
    history.push("/");
  };

  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create A Task</h2>
        <form onSubmit={e => onSubmit(e)}>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Task Title</label>
                <input 
                    type="text"
                    className="col-sm-10 form-control form-control-lg"
                    placeholder="Enter Task Title"
                    name="task_title"
                    value={task_title}
                    onChange={e => onInputChange(e)}
                 />
        </div>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Due Date</label>
                <input 
                    type="date"
                    className="col-sm-10 form-control form-control-lg"
                    placeholder="Enter Due Date"
                    name="due_date"
                    value={due_date}
                    onChange={e => onInputChange(e)}
                 />
        </div>

        
        <div class="form-group row">
            <label class="col-sm-2 col-form-label" style={{fontSize: '18px', fontWeight: '500'}}>Assigned to</label>
        </div>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Employee Name</label>
                <input 
                    type="text"
                    className="col-sm-10 form-control form-control-lg"
                    placeholder="Enter Employee Name"
                    name="employee_name"
                    value={employee_name}
                    onChange={e => onInputChange(e)}
                 />
        </div>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Employee Email</label>
                <input 
                    type="text"
                    className="col-sm-10 form-control form-control-lg"
                    placeholder="Enter Employee Email"
                    name="employee_email"
                    value={employee_email}
                    onChange={e => onInputChange(e)}
                 />
        </div>

        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Employee Phone</label>
                <input 
                    type="text"
                    className="col-sm-10 form-control form-control-lg"
                    placeholder="Enter Employee Phone"
                    name="employee_phone"
                    value={employee_phone}
                    onChange={e => onInputChange(e)}
                 />
        </div>

        
          
        <button className="btn btn-primary btn-block">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;