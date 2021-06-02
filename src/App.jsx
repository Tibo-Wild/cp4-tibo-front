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
import UserContext from './components/UserContext';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {

  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <UserContext.Provider value={{user, setUser}}>
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
            <ProtectedRoute exact path="/admin" component={AdminContainer} from="/admin"/>
            {/*<Route exact path="/admin" component={AdminContainer}/>*/}
            <ProtectedRoute path="/admin/entraineur" component={TrainerAdmin} from="/admin/entraineur"/>
            <ProtectedRoute path="/admin/suppression-joueur" component={PlayersAdminDelete} from="/admin/suppression-joueur"/>
            <ProtectedRoute path="/admin/ajout-joueur" component={PlayersAdminAdd} from="/admin/ajout-joueur"/>
            <ProtectedRoute path="/admin/derniers-matchs" component={PreviousMatchsAdmin} from="/admin/derniers-matchs"/>
            <ProtectedRoute path="/admin/prochains-matchs" component={NextMatchsAdmin}from="/admin/prochains-matchs"/>
            <ProtectedRoute path="/admin/palmares" component={PalmaresAdmin} from="/admin/palmares"/>
            <Route exact path ='/joueur/:id' component={PlayerCard} />
            <Route exact path = '/entraineur/:id' component={TrainerCard}/>
        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
