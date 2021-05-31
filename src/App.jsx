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
import AdminContainer from './components/admin/AdminContainer';
import PlayerCard from './components/Card/PlayerCard';
import TrainerCard from './components/Card/TrainerCard';
import Legends from './components/Legends/Legends';
import TrainerAdmin from './components/admin/TrainerAdmin'
import PlayersAdminDelete from './components/admin/PlayersAdminDelete';
import PlayersAdminAdd from './components/admin/PlayersAdminAdd';
import PreviousMatchsAdmin from './components/admin/PreviousMatchsAdmin';
import NextMatchsAdmin from './components/admin/NextMatchsAdmin';
import PalmaresAdmin from './components/admin/PalmaresAdmin';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/effectif" component={Players}/>
          <Route path="/derniers-matchs" component={Previous}/>
          <Route path="/prochains-matchs" component={Next}/>
          <Route path="/le-stade" component={Stadium}/>
          <Route path="/nos-legendes" component={Legends}/>
          <Route path="/login" component={Login}/>
          <Route exact path="/admin" component={AdminContainer}/>
          <Route path="/admin/entraineur" component={TrainerAdmin}/>
          <Route path="/admin/suppression-joueur" component={PlayersAdminDelete}/>
          <Route path="/admin/ajout-joueur" component={PlayersAdminAdd}/>
          <Route path="/admin/derniers-matchs" component={PreviousMatchsAdmin}/>
          <Route path="/admin/prochains-matchs" component={NextMatchsAdmin}/>
          <Route path="/admin/palmares" component={PalmaresAdmin}/>
          <Route exact path ='/joueur/:id' component={PlayerCard} />
          <Route exact path = '/entraineur/:id' component={TrainerCard}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
