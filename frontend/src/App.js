import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Error from './components/pages/Error';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AddTask from './components/task/AddTask';
import EditTask from './components/task/EditTask';
import Task from './components/task/Task';
import DeleteTask from './components/task/DeleteTask';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tasks/add" component={AddTask} />
          <Route exact path="/tasks/edit/:id" component={EditTask} />
          <Route exact path="/tasks/:id" component={Task} />
          <Route exact path="/tasks/delete/:id" component={DeleteTask} />
          <Route path="*" component={Error} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;

