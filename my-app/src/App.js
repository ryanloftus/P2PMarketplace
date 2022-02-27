import NavBar from './navbar';
import FilterMenu from './filter-menu';
import AdList from './ad-list';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <Container fluid className="app">
      <Row>
        <NavBar name="ryanloftus02@outlook.com" />
      </Row>
      <Row>
        <Col>
          <FilterMenu />
        </Col>
        <Col xs={10}>
          <AdList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
