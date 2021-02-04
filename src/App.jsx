import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/effectif" component={Players}/>
          <Route path="/login" component={Login}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
