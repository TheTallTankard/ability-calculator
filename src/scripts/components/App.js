import '../../styles/App.css';
import Header from '../../common/js/Header';
import Footer from '../../common/js/Footer';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Header href="https://thetalltankrd.github.io/ability-calculator" text="Ability Calculator"></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
