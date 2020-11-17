import { Component } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class App extends Component{
  state = {
    todos :[
      
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
        todos:todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }

  render() {
     return (
      <div className="App container">
         <header className="App-header">
           <h1 className="text-center">Todo's</h1>
           <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
           <AddTodo addTodo={this.addTodo }/>
        </header>
      </div>
    );
  }
 
}

export default App;
