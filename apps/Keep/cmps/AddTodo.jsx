import { notesService } from '../services/notes-service.js'

export class AddTodo extends React.Component {
    state = {
        isAdding: false,
        newTodoTxt: null
    }
    onEditTodo = () => {
        this.setState({ isAdding: true });
    }
    setNewTodoTxt = (ev) => {
        const newTodoTxt = ev.target.value;
        this.setState({newTodoTxt});
    }
    onAddTodo = () => {
        const newTodo = { txt: this.state.newTodoTxt, doneAt: null };
        notesService.addNewTodo(this.props.id, newTodo);
        this.setState({ isAdding: false });
        this.props.loadNotes();
    }
    render() {
        const { isAdding, newTodoTxt } = this.state;
        if (!isAdding) return (
            <li className='add-todo' onClick={this.onEditTodo}>
                <i className="far fa-check-square"></i>
                <span>...</span>
            </li>
        );
        return (
            <div>
                <input type="text" className="todoText" placeholder="To do:..." onChange={(ev) => { this.setNewTodoTxt(ev) }} />
                <div className="btn-add-todo" onClick={() => this.onAddTodo(newTodoTxt)}>
                    <i className="fas fa-check"></i>
                </div>
            </div>
        );
    }
}