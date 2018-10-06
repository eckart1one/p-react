import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.js';
import TodoForms from './components/TodoForms.js';
import {todos} from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos,
      isLoaded: true,
      items: [],
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    
  }

  componentDidMount(){
    fetch('http://birdev.com/LNPP/public/index.php/api/evolucion/10/1')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  handleAddTodo(todo){
   this.setState({
     todos: [...this.state.todos, todo]
   }) 
  }

  removeTodo(index){
    console.log(index);
    this.setState({
      todos: this.state.todos.filter((e,i)=>{
        return i !== index;
      })
    })
  }
  
  render() {
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div key={i} className="col-md-4">
              <div className="card mt-4">
                <div className="card-header">
                  <h1>{todo.title}</h1>
                  <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
                </div>
                <div className="card-body">
                  <p>{todo.title}</p>
                  <p><mark>{todo.responsible}</mark></p>
                </div>
                <div className="card-footer">
                  <button 
                    className="btn btn-danger" 
                    onClick={this.removeTodo.bind(this,i)}
                    >Remove</button>
                </div>
              </div>
        </div>  
      )
    }) 

    return (
      <div className="App">
        <Navigation titulo="Es te es el titulo" />
       
       <span className="badge badge-pill badge-info li-2">
        {this.state.todos.length}
       </span>
       
        <div className="container">
          <div className="row mt-4">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoForms onAddTodo={this.handleAddTodo}/>
            {todos}
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
