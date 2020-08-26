
export function MailPreview({mail}){

    function getDate(){
        const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(mail.sentAt);
        const dateToShow = date.getDay()+' '+ months[date.getMonth()];
        return dateToShow
    }
    

    return (
        <li className="mail-preview">
            <input type="checkbox" ></input>
            <h4>{mail.fromName}</h4>
            <h4>{mail.subject}</h4>
            <h4>Short body</h4>
            <h4>{getDate()}</h4>
        </li>
    )
}