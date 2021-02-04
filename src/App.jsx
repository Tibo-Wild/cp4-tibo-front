import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Players from './components/Players/Players';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact="/effectif" component={Players}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
