export class NoteTodos extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    render() {
        console.log(this.props);
        const { note } = this.state;
        return note && <div className={`note todos note=${note.id}`}>
            <h2>{note.title}</h2>
            <ul>
                {note.info.todos.map((todo, idx) => <li key={idx}>{todo.txt}</li>)}
            </ul>
        </div >
    }
}