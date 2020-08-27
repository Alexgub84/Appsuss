export class NewMail extends React.Component{ mail='';


render(){
    return (
        <div className="new-mail container">
            <div className="new-mail-title">New Message</div>
            <div className="new-mail-line">
                <span>To:</span>
                <input type="text" />
            </div>
            <div className="new-mail-line">
                <span>Cc:</span>
                <input type="text"/>
            </div>
            <div className="new-mail-line">
                <span>Bcc:</span>
                <input type="text"/>
            </div>
            <div className="new-mail-line">
                <span>Subject:</span>
                <input type="text"/>
            </div>
            <textarea></textarea>
            <div className="new-mail-btns btn">
                <div onClick={()=>this.props.onSend()}>Send</div>
                <div className="btn">Delete</div>
            </div>
        </div>
    )
}

}