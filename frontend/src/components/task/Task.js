import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Task = () => {
  const [task, setTask] = useState({
    task_title: "",
    due_date: "",
    employee_name: "",  
    employee_email: "",
    employee_phone: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadTask();
  }, []);

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

  const loadTask = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/task-detail/${id}/`);
    setTask(res.data);
  };
  
  return (
    <div className="container py-4" style={{textAlign:"justify",textAlignLast: "start"}}>
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Task Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Task Title: {task.task_title}</li>
        <li className="list-group-item">Due Date: {task.due_date}</li>
        <li className="list-group-item">Employee Name: {task.employee_name}</li>
        <li className="list-group-item">Email: {task.employee_email}</li>
        <li className="list-group-item">Phone: {task.employee_phone}</li>
      </ul>
    </div>
  );
};

export default Task;