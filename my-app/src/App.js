import NavBar from './navbar';
import FilterMenu from './filter-menu';
import AdList from './ad-list';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
    <div className="app">
      <NavBar name="ryanloftus02@outlook.com" />
      <FilterMenu />
      <AdList />
    </div>
  );
}

export default App;
