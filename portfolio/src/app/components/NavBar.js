import './NavBar.css'

function NavBar() {
    return (
        <div className="navBar">
            <div className="innerBar">
                <div className="name">
                    <a href="/">Bumjin Joo</a>
                </div>
                <div className="menu">
                    <a href="#work">Work</a>
                    <a href="">Resume</a>               
                    <a href="/.about_me">About Me</a>               
                </div>
            </div>
        </div>
    )
}

export default NavBar;