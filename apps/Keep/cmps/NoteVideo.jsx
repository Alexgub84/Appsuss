export class NoteVideo extends React.Component {
    state = {
        note: null
    }
    componentDidMount() {
        const { note } = this.props;
        this.setState({ note });
    }
    render() {
        const { note } = this.state;
        return note && <iframe width="100%" src={note.info.url}></iframe>
    }
}