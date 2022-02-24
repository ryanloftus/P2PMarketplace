import NavBar from './navbar';
import FilterMenu from './filter-menu';
import AdList from './ad-list';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <NavBar name="ryanloftus02@outlook.com" />
      <FilterMenu />
      <AdList />
    </div>
  );
}

export default App;
