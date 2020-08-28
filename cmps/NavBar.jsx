const { NavLink, withRouter } = ReactRouterDOM;
import { Search } from './Search.jsx'

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
                    <nav className="nav-container" style={{ display: (isMenuHidden) ? 'none' : 'block' }}>
                        {!isMenuHidden && <div>
                            <NavLink exact activeClassName='active-nav' onClick={this.toggleMenu} to='/'>
                                <div className="nav-link">
                                    <h3>Home</h3>
                                    <i className="fas fa-home"></i>
                                </div>
                            </NavLink>
                            <NavLink exact onClick={this.toggleMenu} to="/keep">
                                <div className="nav-link">
                                    <h3>Keep</h3>
                                    <i className="far fa-sticky-note"></i>
                                </div>
                            </NavLink>
                            <NavLink exact onClick={this.toggleMenu} to="/mail">
                                <div className="nav-link">
                                    <h3>Mail</h3>
                                    <i className="far fa-envelope"></i>
                                </div>
                            </NavLink>
                            <NavLink exact onClick={this.toggleMenu} to="/about">
                                <div className="nav-link">
                                    <h3>About</h3>
                                    <i className="fas fa-info"></i>
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