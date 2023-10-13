import logo from "../assets/Logo .svg"

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo"/>
            <p>Copyright Little Lemon</p>
            <nav>
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a href="/">Address</a></li>
                    <li><a href="/">Phone Number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Insta</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;