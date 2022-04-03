import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar(props) {
    return (
        <Navbar className="NavBar" variant="dark" style={{backgroundColor: '#333'}}>
            <Navbar.Brand className="NavBar-title">P2P MarketPlace</Navbar.Brand>
            <Nav>
                <Nav.Link onClick={props.goToAds}>View Ads</Nav.Link>
                <Nav.Link onClick={props.goToProfile}>Profile</Nav.Link>
                <Nav.Link onClick={props.goToPost}>Post an Ad</Nav.Link>
                <Nav.Link onClick={props.goToLogin}>Logout</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;