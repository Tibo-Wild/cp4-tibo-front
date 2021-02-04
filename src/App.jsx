import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import Login from './components/Login/Login';
import Previous from './components/Match/PreviousMatch';
import Next from './components/Match/NextMatch';
import Stadium from './components/Stadium/Stadium';
import Admin from './components/admin/Admin';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/effectif" component={Players}/>
          <Route path="/login" component={Login}/>
          <Route path="/derniers-matchs" component={Previous}/>
          <Route path="/prochains-matchs" component={Next}/>
          <Route path="/le-stade" component={Stadium}/>
          <Route path="/admin" component={Admin}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
