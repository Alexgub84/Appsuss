
export function MailPreview({mail}){
    console.log(mail);
    return (
        <li className="mail-preview">
            <h4>{mail.fromName}</h4>
            <h4>{mail.subject}</h4>
            <h4>Short body</h4>
            <h4>{mail.sentAt}</h4>
        </li>
    )
}