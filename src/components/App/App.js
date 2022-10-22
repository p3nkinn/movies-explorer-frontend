import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import "./App.css";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
