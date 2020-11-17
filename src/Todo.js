


const Todo = (props) => {
    const {todos, deleteTodo} = props
    const todoItem = todos.length > 0 ? (
        todos.map(todo => {
           return  (
                <div className="todo card" key={todo.id}>
                   <span className="px-3 py-2" onClick={() => { deleteTodo(todo.id) }}>{todo.content }</span>
                </div>
            )
        })
    ) : (
            'You have nothing to do, yeay!'
    )
    return (
        <div className="list-todo">
            {todoItem}
        </div>
    )
        
    
}


export default Todo