// import {MailFull} from './cmps/MailFull.jsx'


export class MailPreview extends React.Component{
state={
    isFullShown:false
}

    getDate(tStapm){
        const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(tStapm);
        const dateToShow = date.getDay()+' '+ months[date.getMonth()];
        return dateToShow
    }

    onMailClicked(){
        this.setState({isFullShown: !this.state.isFullShown})
    }



    render(){
        
        const {id,fromName,subject,isRead,sentAt,body} = this.props.mail;
        return (
            <li key={id} className="mail-preview" onClick={()=>this.props.mailPreivewClicked(id)}>            
                <input type="checkbox"></input>
                {/* <div className="first-letter">{fromName.charAt(0)}</div> */}
                <span  className={isRead?'mail-from-name':'mail-from-name bold'}>{fromName}</span>
                <span  className={isRead?'mail-subject':'mail-subject bold'}>{subject}</span>
                <span  className="mail-body">{body}</span>
                <span  className={isRead?'mail-atdate':'mail-atdate bold'}>{this.getDate(sentAt)}</span>
            </li>
        )
    }
}