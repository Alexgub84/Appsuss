import { notesService } from '../apps/Keep/services/notes-service.js'

export class Search extends React.Component {
    state = {
        currPage: 'keep'
    }
    componentDidMount() {
        const { currPage } = this.props;
        this.setState({ currPage });
    }
    onFilterNotes = (ev) => {
        const listToShow = notesService.notesQuery(ev.target.value);
        this.props.setFilteredNotes(listToShow);
    }
    onFilterMails = (ev) => {
        console.log(ev.target.value);
    }
    render() {
        const { currPage } = this.state;
        return (
            <div className='search-container'>
                <input type="text" placeholder="Search..." onChange={(ev) => {
                    (currPage === 'keep') ? this.onFilterNotes(ev) : this.onFilterMails(ev)
                }} />
                <i className="fas fa-search"></i>
            </div>
        );
    }
}