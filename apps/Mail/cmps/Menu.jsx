
export function Menu(props){
    return (
        <ul className="menu">
            <li className="compose-btn btn" onClick={()=>props.composeNew()}>Compose+</li>
            <li className="menu-btn btn" onClick={()=>props.filterByInbox()}>Inbox</li>
            <li className="menu-btn btn">Stared</li>
            <li className="menu-btn btn" onClick={()=>props.filterBySent()}>Sent Mail</li>
            <li className="menu-btn btn" onClick={()=>props.filterByTrash()}>Trash</li>
            <li className="menu-btn btn">Drafts</li>
        </ul>
    )
}