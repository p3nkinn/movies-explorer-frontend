import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
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
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [isMovieDelete, setMovieDelete] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isCardDelete, setCardDelete] = React.useState({});
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
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

  const getMovies = () => {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    MoviesApi.getMovies(jwt)
      .then((res) => {
        const card = res.map((item) => {
          return {
            key: item._id,
            id: item.movieId,
            image: item.image,
            nameRU: item.nameRU,
            duration: item.duration,
            owner: item.owner,
            trailer: item.trailer,
          };
        });
        setSaveMovies(card);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleCardDelete = () => {
    MainApi.deleteCard(isCardDelete._id)
      .then(() => {
        setMovies((state) =>
          state.filter((item) => item._id !== isCardDelete._id)
        );
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  };

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    MainApi.setProfileInfo(name, email, jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegisterSubmit = (name, email, password) => {
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLoginSubmit(email, password);
        setSuccess(true);
        history.push("/signin");
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }
        setSuccess(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoginSubmit = (email, password) => {
    setIsLoading(true);
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setloggedIn(true);
        history.push("/movies");
        MainApi.getProfileInfo(res).then((res) => {
          localStorage.setItem("jwt", res.token);
          setCurrentUser(res);
          getMovies();
        });
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 — не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден ");
        }
      })
      .finally(() => setIsLoading(false));
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setSaveMovies([]);
    setloggedIn(false);
  };

  const handleSaveMovies = (card) => {
    setIsLoading(true);
    MainApi.addNewCard(card)
      .then((item) => {
        const newCard = {
          key: item._id,
          id: item.movieId,
          image: item.image,
          nameRU: item.nameRU,
          duration: item.duration,
          owner: item.owner,
          trailer: item.trailer,
        };
        setSaveMovies([newCard, ...saveMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <main className="main-content">
          {/* <Preloader onVisible={isLoading} /> */}
          <Switch>
            <Route exact path="/">
              <Main loggedIn={loggedIn} />
            </Route>
            <ProtectedRoute
              loggedIn={loggedIn}
              movie={movies}
              onMovieDelete={handleCardDelete}
              saveMovies={handleSaveMovies}
              saveMovie={saveMovies}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              exact
              path="/movies"
              component={Movies}
            ></ProtectedRoute>
            <ProtectedRoute
              loggedIn={loggedIn}
              movie={movies}
              onMovieDelete={handleCardDelete}
              exact
              path="/saved-movies"
              component={SavedMovies}
            >
            </ProtectedRoute>
            <ProtectedRoute
              loggedIn={loggedIn}
              signOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              exact
              path="/profile"
              component={Profile}
            >
            </ProtectedRoute>
            <Route exact path="/signup">
              {loggedIn ? <Redirect to="/" /> : ""}
              <Register onRegister={handleRegisterSubmit} />
            </Route>
            <Route exact path="/signin">
              {loggedIn ? <Redirect to="/" /> : ""}
              <Login onLogin={handleLoginSubmit} />
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
};

export default App;
