
export class MailFull extends React.Component{
    state={
        isShown: false
    }
    toggleShown=()=>{
        this.setState({isShown:!this.state.isShown})
    }
    // function getDate(){
    //     const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //     const date = new Date(mail.sentAt);
    //     const dateToShow = date.getDay()+' '+ months[date.getMonth()];
    //     return dateToShow
    // }
    render(){
        const {id,fromName,fromEmail,subject,isRead,sentAt,body} = this.props.mail;
        // const classStr = this.state.isShown?'mail-full':'mail-full hidden'
        return (
            <li className="full-container">
                <section className="full-title">
                    <div className="full-subject">{subject}</div>
                    <div>
                        {/* <div className="full-delete btn">X</div>
                        <div className="full-close btn">Close</div> */}
                        <button className="full-delete btn">X</button>
                        <button className="full-close btn" onClick={this.props.closeFullPreview}>Close</button>
                    </div>
                </section>
                <section className="full-from">
                    <span className="full-from-name">{fromName}</span>
                   <span className="full-from-email">{`<${fromEmail}>`}</span>
                </section>
                <p className="full-body"> {body} </p>
            </li>
        )
    }

}