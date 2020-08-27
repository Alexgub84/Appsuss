import { noteService, notesService } from '../services/notes-service.js'

export class Todo extends React.Component {
    state = {
        isMouseOver: false
    }
    onMouseOver = () => {
        this.setState({ isMouseOver: true });
    }
    onMouseOut = () => {
        this.setState({ isMouseOver: false });
    }
    onRemoveTodo = (todoIdx) => {
        notesService.removeTodo(this.props.noteId, todoIdx)
        this.props.loadNotes();
    }
    render() {
        const { todo, idx } = this.props;
        const { isMouseOver } = this.state;
        const classDone = (todo.doneAt) ? 'todo-done' : '';
        return (
            <li key={idx} className={`todo-container ${classDone}`} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <span className="todo">
                    {todo.doneAt && <input type="checkbox" checked onChange={() => { this.props.handleToggleTodo(idx) }} />}
                    {!todo.doneAt && <input type="checkbox" onChange={() => { this.props.handleToggleTodo(idx) }} />}
                    <p>{todo.txt}</p>
                </span>
                <div className="btn-remove-todo" style={{ opacity: (isMouseOver) ? 1 : 0 }} onClick={() => { this.onRemoveTodo(idx) }}>
                    <i className="fas fa-times"></i>
                </div>
            </li>
        )
    }
}