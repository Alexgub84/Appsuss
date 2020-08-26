import { notesService } from '../services/notes-service.js';

export class NoteTodos extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    handleToggleTodo = (noteId, todoIdx) => {
        notesService.toggleTodo(noteId, todoIdx);
        this.props.loadNotes();
    }
    render() {
        const { note } = this.state;
        return note && <ul>
            {note.info.todos.map((todo, idx) => {
                let classDone = '';
                if (todo.doneAt) classDone = 'todo-done';
                return <li key={idx} className={`todo ${classDone}`}>
                    {todo.doneAt && <input type="checkbox" checked onChange={() => { this.handleToggleTodo(note.id, idx) }} />}
                    {!todo.doneAt && <input type="checkbox" onChange={() => { this.handleToggleTodo(note.id, idx) }} />}
                    {todo.txt}
                </li>
            })
            }
        </ul >
    }
}