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
                    <h1>
                        <span className="logo">EA</span>
                        <span className="appsus-logo">&nbsp;| APPSUS</span>
                    </h1>
                    <div className="btn-nav-menu" onClick={this.toggleMenu}>☰</div>
                    <nav className="nav-container" style={{ display: (isMenuHidden) ? 'none' : 'grid' }}>
                        {!isMenuHidden && <React.Fragment>
                            <NavLink exact activeClassName='active-nav' onClick={this.toggleMenu} to='/'>
                                <div className="nav-link">
                                    <div className="img-container">
                                        <img src="/./../assets/img/home-icon.png" />
                                    </div>
                                    <h3>Home</h3>
                                </div>
                            </NavLink>
                            <NavLink exact onClick={this.toggleMenu} to="/about">
                                <div className="nav-link">
                                    <div className="img-container">
                                        <img src="/./../assets/img/about-us-icon.jpg" />
                                    </div>
                                    <h3>About</h3>
                                </div>
                            </NavLink>
                            <NavLink exact onClick={this.toggleMenu} to="/mail">
                                <div className="nav-link">
                                    <div className="img-container">
                                        <img src="/./../assets/img/mail-icon.png" />
                                    </div>
                                    <h3>Mail</h3>
                                </div>
                            </NavLink>
                            <NavLink exact onClick={this.toggleMenu} to="/keep">
                                <div className="nav-link">
                                    <div className="img-container">
                                        <img src="/./../assets/img/note-icon.png" />
                                    </div>
                                    <h3>Keep</h3>
                                </div>
                            </NavLink>
                        </React.Fragment>}
                    </nav>
                </section>
            </header>
        )
    }
}
export const NavBar = withRouter(_NavBar);