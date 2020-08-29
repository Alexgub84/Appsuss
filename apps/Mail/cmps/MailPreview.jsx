import { ConrolPanel } from '../cmps/ControlPanel.jsx'


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

    // onToggleCheckbox=(id)=>{
        
    //     let checked=this.state.mailsChecked;
    //     if (checked.includes(id)){
    //         const idx = checked.indexOf(id);
    //         checked.slice(idx,1);
    //     }else{
    //         checked.push(id);
    //     }
    //     this.setState({mailsChecked:checked})
    // }

    render(){
        
        const {id,fromName,subject,isRead,sentAt,body} = this.props.mail;
        return (
            <section>
                {/* <ConrolPanel checked={this.state.checked}/> */}
                <li key={id} className="mail-preview" >            
                    <input type="checkbox" onChange={()=>this.props.toggleCheckbox(id)}></input>
                    <div className="mail-txt" onClick={()=>this.props.mailPreivewClicked(id)}>
                        <span  className={isRead?'mail-from-name':'mail-from-name bold'}>{fromName}</span>
                        <span  className={isRead?'mail-subject':'mail-subject bold'}>{subject}</span>
                        <span  className="mail-body">{body}</span>
                        <span  className={isRead?'mail-atdate':'mail-atdate bold'}>{this.getDate(sentAt)}</span>
                    </div>
        
                </li>
            </section>
        )
    }
}