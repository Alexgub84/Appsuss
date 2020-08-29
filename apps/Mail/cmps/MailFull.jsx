const { Link } = ReactRouterDOM
import {notesService} from '../../Keep/services/notes-service.js' 

export class MailFull extends React.Component{
    state={
        isShown: false,
        bodyLenght: 200,
        loadMoreBtn: ' show more'
    }
    toggleShown=()=>{
        this.setState({isShown:!this.state.isShown})
    }
    toggleLoadMore=()=>{
        
    if (this.state.bodyLenght===200){
        this.setState({bodyLenght:Infinity,loadMoreBtn:' show less'})
        return
    }
    this.setState({bodyLenght:200,loadMoreBtn:' show more'})
   
    }
   
    makeNote=(id)=>{
        notesService.createNoteFromMail(id);
    }   

    render(){
        const {id,fromName,fromEmail,subject,body} = this.props.mail;
        // const classStr = this.state.isShown?'mail-full':'mail-full hidden'
        return (
            <li className="full-container">
                <section className="full-title">
                    <div className="full-subject">{subject}</div>
                    <div  className="full-btns flex">
                        <Link to={`/mail/compose/${id}`} className="full-reply btn"><i class="fas fa-reply"></i></Link>
                        <div className="full-savetonote btn" onClick={()=>this.makeNote(id)}><i className="fas fa-sticky-note"></i></div>
                        <div className="full-delete btn" onClick={()=>this.props.moveToTrash(id)}><i className="fas fa-trash"></i></div>
                        <div className="full-expand btn" onClick={()=>this.toggleLoadMore()}><i className="fas fa-expand"></i></div>
                        <div className="full-close btn" onClick={()=>this.props.closeFullPreview()}><i className="far fa-window-close"></i></div>
                    </div>
                </section>
                <section className="full-from">
                    <span className="full-from-name">{fromName}</span>
                   <span className="full-from-email">{` <${fromEmail}>`}</span>
                </section>
        <p className="full-body"> {body.substring(0, this.state.bodyLenght)+'...'} <span className="full-loadmore-btn btn" onClick={()=>this.toggleLoadMore()}>{this.state.loadMoreBtn}</span>
                </p>
            </li>
        )
    }

}