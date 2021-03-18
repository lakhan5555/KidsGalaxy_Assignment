import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';


function Home() {
    let history = useHistory()
    const [tasks, setTasks] = useState([])

    const [task1, setTask1] = useState({
        solved: false
      });

    useEffect(() => {
        getTasks();
    }, [task1]);

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

    const getTasks = async() => {
        const result = await axios.get("http://127.0.0.1:8000/api/task-list/")
        console.log(result);
        setTasks(result.data.reverse());
    }


    const onInputChange = async (e,id) => {
    e.preventDefault();    
    setTask1({ ...task1, [e.target.name]: e.target.checked });
    var csrftoken = getCookie('csrftoken')
    await axios.put(`http://127.0.0.1:8000/api/task-update/${id}/`, task1,{
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      }
    });
    history.push("/");
  };
    

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task Title</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Employee Name</th>
                            <th>Action</th>
                            <th>Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => (
                                <tr>
                                    <th col="row">{index + 1}</th>
                                    <td>{task.task_title}</td>
                                    <td>{task.due_date}</td>
                                    <td>{task.employee_name}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/tasks/${task.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/tasks/edit/${task.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" to={`/tasks/delete/${task.id}`}>Delete</Link>
                                    </td>
                                    <td>
                                        <form>
                                            <div class="form-group row">
                                                <input 
                                                    type="checkbox"
                                                    className="col-sm-10 form-control form-control-lg"
                                                    // placeholder="Enter Task Title"
                                                    name="solved"
                                                    checked={task.solved}
                                                    
                                                    onClick={e => onInputChange(e,task.id)}
                                                />
                                                    
                                            </div>
                                        </form>    
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
            <div className="py-4">
                <h1>Solved</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task Title</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Employee Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => {
                            if (task.solved) {
                                return (

                                    <tr>
                                        <th col="row">{index + 1}</th>
                                        <td>{task.task_title}</td>
                                        <td>{task.due_date}</td>
                                        <td>{task.employee_name}</td>
                                       
                                    </tr>
                                
                                )
                            }   
                            })
                        }
                    </tbody>
                </table>
            </div>              

        </div>
    )
}

export default Home
