import { notesService } from '../services/notes-service.js';
import { AddTodo } from './AddTodo.jsx'
import { Todo } from './Todo.jsx'

export class NoteTodos extends React.Component {
    state = {
        note: null,
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    handleToggleTodo = (todoIdx) => {
        notesService.toggleTodo(this.state.note.id, todoIdx);
        this.props.loadNotes();
    }
    render() {
        const { note } = this.state;
        return note && <ul>
            {note.info.todos.map((todo, idx) => {
                return <Todo key={idx} todo={todo} idx={idx} noteId={note.id} isEditMode={this.state.isEditMode} handleToggleTodo={this.handleToggleTodo} loadNotes={this.props.loadNotes} />
            })}
            <AddTodo id={note.id} loadNotes={this.props.loadNotes} />
        </ul >
    }
}