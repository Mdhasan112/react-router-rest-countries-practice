import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/country/:name">
        <CountryDetail />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
