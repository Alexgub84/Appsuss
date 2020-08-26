
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
        const classStr = this.state.isShown?'mail-full':'mail-full hidden'
        return (
            <li className={classStr}>
                Hellooo
                {/* <p> {mail.body}</p> */}
            </li>
        )
    }
    
}