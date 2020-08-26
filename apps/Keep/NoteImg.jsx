export class NoteImg extends React.Component {
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
        return note && <div className={`note img note=${note.id}`}>
            <h2>{note.title}</h2>
            <img src={note.info.url} />
        </div>
    }
}