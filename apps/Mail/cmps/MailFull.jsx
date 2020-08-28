
export class MailFull extends React.Component{
    state={
        isShown: false
    }
    toggleShown=()=>{
        this.setState({isShown:!this.state.isShown})
    }
   
    render(){
        const {id,fromName,fromEmail,subject,isRead,sentAt,body} = this.props.mail;
        // const classStr = this.state.isShown?'mail-full':'mail-full hidden'
        return (
            <li className="full-container">
                <section className="full-title">
                    <div className="full-subject">{subject}</div>
                    <div  className="full-btns flex">
                        <div className="full-delete btn" onClick={()=>this.props.moveToTrash(id)}><i className="far fa-window-close"></i></div>
                        <div className="full-close btn" onClick={()=>this.props.closeFullPreview()}><i className="fas fa-trash"></i></div>
                    </div>
                </section>
                <section className="full-from">
                    <span className="full-from-name">{fromName}</span>
                   <span className="full-from-email">{` <${fromEmail}>`}</span>
                </section>
                <p className="full-body"> {body.substring(1, 200)+'...'} <span> load more...</span>
                </p>
            </li>
        )
    }

}