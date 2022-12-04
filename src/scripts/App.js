import logo from '../logo.svg';
import '../styles/App.css';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Body></Body>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer></Footer>
    </div>
  );
}

export default App;