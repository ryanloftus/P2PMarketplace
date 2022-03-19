import React, { useState } from 'react';
import NavBar from './navbar';
import FilterMenu from './filter-menu';
import AdList from './ad-list';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [filters, setFilters] = useState({
    category: 'any',
    priceMin: 0,
    priceMax: 999999,
    sort: 'age-new',
  });

  return (
    <Container fluid className="app">
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col>
          <FilterMenu onFiltersChange={setFilters} />
        </Col>
        <Col xs={10}>
          <AdList filters={filters} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
