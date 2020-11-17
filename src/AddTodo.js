import {Component} from 'react'


class AddTodo extends Component{
    state = {
        content:''
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }


    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control mt-3" type="text" name="todo" id="todo" onChange={this.handleChange} value={this.state.content} placeholder="write todo..." />
                    <small>*klik on todo item to delete</small>
                </form>
            </div>
        )
    }
}

export default AddTodo