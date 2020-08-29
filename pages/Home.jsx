const { NavLink, withRouter } = ReactRouterDOM;

class _Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Home</h2>
                <section className="home-container">
                    <NavLink exact to="/mail">
                        <div className="nav-link">
                            <div className="img-container">
                                <img src="assets/img/mail-icon.png" />
                            </div>
                            <h2>Mail</h2>
                        </div>
                    </NavLink>
                    <NavLink exact to="/keep">
                        <div className="nav-link">
                            <div className="img-container">
                                <img src="assets/img/note-icon.png" />
                            </div>
                            <h2>Keep</h2>
                        </div>
                    </NavLink>
                </section>
            </React.Fragment>
        )
    }
}

export const Home = withRouter(_Home);