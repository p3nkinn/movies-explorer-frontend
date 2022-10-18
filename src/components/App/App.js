import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./App.css";
import { useState } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
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
        <Route exact path="/sign-up">
          <Register />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
