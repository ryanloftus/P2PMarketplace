function NavBar(props) {
    return (
        <div class="NavBar">
            <h1 class="NavBar-title">P2P MarketPlace</h1>
            <div class="NavBar-links">
                <a class="NavBar-link" href="./post">Post an Ad</a>
                <a class="NavBar-link" href="./profile">{props.name}</a>
                <a class="NavBar-link" href="./login">Logout</a>
            </div>
        </div>
    );
}

export default NavBar;