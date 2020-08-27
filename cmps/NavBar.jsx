const { NavLink, withRouter } = ReactRouterDOM;

class _NavBar extends React.Component {
    // function goBack(){
    //     props.history.goBack()
    // } 
    state = {
        isMenuHidden: true
    }
    toggleMenu = () => {
        const isMenuHidden = !this.state.isMenuHidden;
        this.setState({ isMenuHidden });
    }
    render() {
        const { isMenuHidden } = this.state;
        return (
            <header>
                <section className="header-container">
                    <h1>EA</h1>
                    <h1>Appsus</h1>
                    <div className="btn-nav-menu" onClick={this.toggleMenu}>☰</div>
                    <nav className="nav-container" style={{ opacity: (isMenuHidden) ? 0 : 1 }}>
                        {!isMenuHidden && <div>
                            <NavLink exact activeClassName='active-nav' to='/'>
                                <div className="nav-link">
                                    <h3>Home</h3>
                                    <i class="fas fa-home"></i>
                                </div>
                            </NavLink>
                            <NavLink exact to="/keep">
                                <div className="nav-link">
                                    <h3>Keep</h3>
                                    <i class="far fa-sticky-note"></i>
                                </div>
                            </NavLink>
                            <NavLink exact to="/mail">
                                <div className="nav-link">
                                    <h3>Mail</h3>
                                    <i class="far fa-envelope"></i>
                                </div>
                            </NavLink>
                            <NavLink exact to="/about">
                                <div className="nav-link">
                                    <h3>About</h3>
                                    <i class="fas fa-info"></i>
                                </div>
                            </NavLink>
                        </div>}
                    </nav>
                </section>
            </header>
        )
    }
}
export const NavBar = withRouter(_NavBar)