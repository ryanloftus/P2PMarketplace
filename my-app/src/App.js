import React, { useState } from 'react';
import NavBar from './navbar';
import FilterMenu from './filter-menu';
import AdList from './ad-list';
import Login from './login';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    const [user, setUser] = useState('RyanLoftus');
    const [view, setView] = useState('ads');
    const [filters, setFilters] = useState({});

    const goToLogin = () => {
        setView('login');
        setUser(null);
    }
    const goToAds = () => setView('ads');
    const goToPost = () => setView('post');
    const goToProfile = () => setView('profile');
    const loginUser = (user) => setUser(user);

    const updateFilter = (filterName, filterValue) => {
        const newFilters = {...filters};
        newFilters[filterName] = filterValue;
        setFilters(newFilters);
    }

    let appJsx;
    let navbar = <NavBar goToAds={goToAds} goToLogin={goToLogin} goToPost={goToPost} goToProfile={goToProfile} />;
    if (view === 'login' || user === null) {
        appJsx = <Login goToAds={goToAds} loginUser={loginUser} />
    } else if (view === 'ads') {
        appJsx = (
            <Container fluid className="app">
                <Row>{navbar}</Row>
                <Row>
                    <Col>
                        <FilterMenu updateFilter={updateFilter} />
                    </Col>
                    <Col xs={10}>
                        <AdList filters={filters} />
                    </Col>
                </Row>
            </Container>
        );
    } else if (view === 'post') {
        
    } else if (view === 'profile') {
        appJsx = (
            <Container fluid className="app">
                <Row>{navbar}</Row>
                <Row>
                    <AdList filters={{user: user}} />
                </Row>
            </Container>
        );
    } else {
        appJsx = <Alert variant="danger"><Alert.Heading>An error occurred. Try reloading the page.</Alert.Heading></Alert>;
    }

    return appJsx;
}

export default App;
