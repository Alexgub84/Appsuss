
export class Menu extends React.Component{
    state={
       active: 'inbox'

    }
    toggleClass(ev){
        const name = ev.target.getAttribute('name');
        this.setState({active:name});
       
    }
    render(){
        const classStr = 'menu-btn btn';
        const active = this.state.active
        return (
            
            <ul className="menu">
                <li> <div className="compose-btn btn" onClick={()=>this.props.composeNew()}> Compose+</div></li>
                <li className={(active==='inbox'?'active ':'')+classStr} name="inbox" onClick={(e)=>{this.props.filterByInbox();this.toggleClass(e)}}>Inbox</li>
                <li className={(active==='starred'?'active ':'')+classStr} name="starred" onClick={(e)=>{this.toggleClass(e)}}>Starred</li>
                <li className={(active==='sent'?'active ':'')+classStr} name="sent" onClick={(e)=>{this.props.filterBySent();this.toggleClass(e)}} >Sent Mail</li>
                <li className={(active==='trash'?'active ':'')+classStr} name="trash" onClick={(e)=>{this.props.filterByTrash();this.toggleClass(e)}}>Trash</li>
                <li className={(active==='draft'?'active ':'')+classStr} name="draft" onClick={(e)=>{this.toggleClass(e)}}>Drafts</li>
            </ul>
        )
    }
}