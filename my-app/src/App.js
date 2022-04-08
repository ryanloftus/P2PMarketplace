import React, { useState } from 'react';
import NavBar from './navbar';
import FilterMenu from './filter-menu';
import AdEditor from './ad-editor';
import AdList from './ad-list';
import Login from './login';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    const [user, setUser] = useState('user1');
    const [view, setView] = useState('ads');
    const [filters, setFilters] = useState({});
    const [adInfo, setAdInfo] = useState({});

    const goToLogin = () => {
        setView('login');
        setUser(null);
    }
    const goToAds = () => setView('ads');
    const goToPost = () => setView('post');
    const goToProfile = () => setView('profile');
    const goToEditor = (ad = {}) => {
        setView('editor');
        setAdInfo(ad);
    }
    const loginUser = (user) => setUser(user);

    const updateFilter = (filterName, filterValue) => {
        const newFilters = {...filters};
        newFilters[filterName] = filterValue;
        setFilters(newFilters);
    }

    let appJsx;
    let navbar = <NavBar goToAds={goToAds} goToLogin={goToLogin} goToPost={goToPost} goToProfile={goToProfile} />;
    if (view === 'login' || user === null) {
        appJsx = (
            <Container fluid className="app" style={{backgroundColor: '#333', height: '100vh', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Login goToAds={goToAds} loginUser={loginUser} />
            </Container>
        );
    } else if (view === 'ads') {
        appJsx = (
            <Container fluid className="app">
                <Row>{navbar}</Row>
                <Row>
                    <Col>
                        <FilterMenu updateFilter={updateFilter} />
                    </Col>
                    <Col xs={10}>
                        <AdList filters={filters} isEditable={false} />
                    </Col>
                </Row>
            </Container>
        );
    } else if (view === 'post') {
        appJsx = (
            <Container fluid className="app">
                <Row>{navbar}</Row>
                <Row><AdEditor exit={goToAds} user={user} /></Row>
            </Container>
        );
    } else if (view === 'editor') {
        appJsx = (
            <Container fluid className="app">
                <Row>{navbar}</Row>
                <Row><AdEditor exit={goToProfile} user={user} adInfo={adInfo} /></Row>
            </Container>
        );
    } else if (view === 'profile') {
        appJsx = (
            <Container fluid className="app">
                <Row>{navbar}</Row>
                <Row><AdList filters={{user: user}} isEditable={true} openEditor={goToEditor} /></Row>
            </Container>
        );
    } else {
        appJsx = <Alert variant="danger"><Alert.Heading>An error occurred. Try reloading the page.</Alert.Heading></Alert>;
    }

    return appJsx;
}

export default App;
