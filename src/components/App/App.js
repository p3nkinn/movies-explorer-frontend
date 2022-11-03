import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import "./App.css";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import * as auth from "../../utils/Auth";
import Preloader from "../Preloader/Preloader";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [isInfoTooltip, setInfoTooltip] = React.useState(false);
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [isMovieDelete, setMovieDelete] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const history = useHistory();
  
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setEmail(res.data.email);
            setloggedIn(true);
            history.push("/");
          }
        })
        .catch((err) => {
          if (err.status === 400) {
            console.log("400 — Токен не передан или передан не в том формате");
          } else if (err.status === 401) {
            console.log("401 — Переданный токен некорректен");
          }
        });
    }
  }, [history]);

  const handleRegisterSubmit = (name, email, password) => {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        setSuccess(true);
        history.push("/sign-in");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }
        setSuccess(false);
      })
      .finally(() => {
        setInfoTooltip(true);
      });
  };

  const handleLoginSubmit = (email, password) => {
    setIsLoading(true);
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setloggedIn(true);
        setEmail(email);
        history.push("/movies");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 — не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден ");
        }
        setInfoTooltip(true);
      });
  };

  const handleUpdateCard = (data) => {
    setIsLoading(true);
    MainApi
      .addNewCard(data)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <main className="main-content">
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
          <Route exact path="/404">
            <NotFound />
          </Route>
        </Switch>
        </main>
        <Footer />
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
