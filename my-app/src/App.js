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

    const [user, setUser] = useState(null);
    const [view, setView] = useState('login');
    const [filters, setFilters] = useState({});

    const goToLogin = () => setView('login');
    const goToCreateAccount = () => setView('createAccount');
    const goToAds = () => setView('ads');
    const goToProfile = () => setView('profile');

    const updateFilter = (filterName, filterValue) => {
        const newFilters = {...filters};
        newFilters[filterName] = filterValue;
        setFilters(newFilters);
    }

    let appJsx;
    if (view === 'login' || user === null) {
        appJsx = <Login />
    } else if (view === 'createAccount') {
        
    } else if (view === 'ads') {
        appJsx = (
            <Container fluid className="app">
                <Row>
                    <NavBar />
                </Row>
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
    } else if (view === 'profile') {

    } else {
        appJsx = <Alert variant="danger"><Alert.Heading>An error occurred. Try reloading the page.</Alert.Heading></Alert>;
    }

    return appJsx;
}

export default App;
