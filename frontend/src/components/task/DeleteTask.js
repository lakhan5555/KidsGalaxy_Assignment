import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteTask() {

    const history = useHistory()
    const { id } = useParams()

    const CancelFn = () => {
        history.push('/')
    }

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


    const deleteUser = async id => {
        var csrftoken = getCookie('csrftoken')
        await axios.delete(`http://127.0.0.1:8000/api/task-delete/${id}/`,{
            headers: {
              'Content-type': 'application/json',
              'X-CSRFToken': csrftoken,
            }
          });
        history.push('/')
      };



    return (
        <div>
            <h3 className="ml-3">Are you sure you want to delete it?</h3>
            <div>
                <button className="btn btn-primary ml-3" onClick={() => (CancelFn())}>Cancel</button>
                <button className="btn btn-danger ml-4" onClick={() => deleteUser(id)}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteTask
