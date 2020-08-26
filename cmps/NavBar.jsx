const {NavLink, withRouter} = ReactRouterDOM
function _NavBar(props){
    function goBack(){
        props.history.goBack()
    } 
    return (
        <header>
            <section className="header-container">
            <h1>EA</h1>
            <h1>Appsus</h1>
            <button>Nav</button>
            </section>
            <nav className="nav-container">
                <NavLink exact activeClassName='active-nav' to='/'>Home</NavLink> 
                <NavLink exact to="/keep">Keep</NavLink> 
                <NavLink exact to="/mail">Mail</NavLink> 
                <NavLink exact to="/about">About</NavLink> 
            </nav>
        </header>
    )
}
export const NavBar = withRouter(_NavBar)