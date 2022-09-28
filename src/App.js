import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/home/:id">
        <CountryDetail />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
