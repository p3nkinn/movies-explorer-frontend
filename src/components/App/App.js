import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
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
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import * as auth from "../../utils/Auth";
import Preloader from "../Preloader/Preloader";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState("");
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isFail, setFail] = React.useState(false);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);
  const [messageError, setMessageError] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.checkToken(jwt);
      setloggedIn(true);
      mainApi
        .getProfileInfo()
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(err);
          history.push("/");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  React.useEffect(() => {
    if (loggedIn) {
      getMovies();
      handleSaveMovies();
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const value = JSON.parse(localStorage.getItem("searchValue"));
    setSearchValue(value);
    if (localStorage.getItem("searchList")) {
      const movieList = JSON.parse(localStorage.getItem("searchList"));
      setFilterMovies(movieList);
    }
  }, []);

  const getMovies = () => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => {
        const movieList = data.map((item) => {
          const imageURL = item.image ? item.image.url : "";
          return {
            ...item,
            image: `https://api.nomoreparties.co${imageURL}`,
            trailer: item.trailerLink,
          };
        });
        localStorage.setItem("searchMovies", JSON.stringify(movieList));
        setAllMovies(movieList);
      })
      .catch(() => {
        setMessageError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        );
      })
      .finally(() => setIsLoading(false));
  };

  const isSavedMovie = (data) => {
    // eslint-disable-next-line array-callback-return
    const result = saveMovies.some((item) => {
      if (item.movieId === data.id) {
        return item;
      }
    });
    return result;
  };

  const handleAction = (data) => {
    if (isSavedMovie(data) === false) {
      addNewMovies(data);
    } else {
      deleteSavedMovie(data);
    }
  };

  const deleteSavedMovie = (data) => {
    saveMovies.forEach((item) => {
      if (item.movieId === data.id) {
        handleCardDelete(item);
      }
    });
  };

  const handleSaveMovies = () => {
    setIsLoading(true);
    mainApi
      .getMovies()
      .then((data) => {
        const saveCard = data.map((item) => ({
          ...item,
          id: item._id,
        }));
        setSaveMovies(saveCard);
      })
      .catch(() => {
        !setIsLoading()
          ? setMessageError("")
          : setMessageError(
              "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            );
      })
      .finally(() => setIsLoading(false));
  };

  const handleSearchMovies = (search) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchValue(search);
      setFilterMovies(searchMovies(allMovies, search));
    }, 2000);
  };

  const searchMovies = (data, search) => {
    if (search && location.pathname === "/movies") {
      const filterRegex = new RegExp(search, "gi");
      const filterData = data.filter(
        (movie) =>
          filterRegex.test(movie.nameRU) || filterRegex.test(movie.nameEN)
      );
      localStorage.setItem("searchList", JSON.stringify(filterData));
      localStorage.setItem("searchValue", JSON.stringify(search));
      if (filterData.length === 0) {
        setMessageError("Ничего не найдено");
      } else {
        setMessageError("");
      }
      return filterData;
    }
    return [];
  };

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    mainApi
      .setProfileInfo(name, email)
      .then((res) => {
        setSuccess(true);
        setCurrentUser(res);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setFail(true);
        setTimeout(() => {
          setFail(false);
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegisterSubmit = (name, email, password) => {
    setMessageError("");
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLoginSubmit(email, password);
        history.push("/signin");
      })
      .catch(() => {
        setMessageError("Пользователь с таким email уже существует.");
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
        mainApi.getProfileInfo().then((data) => {
          localStorage.setItem("currentUser", JSON.stringify(data.data));
          setCurrentUser(data.data);
        });
      })
      .catch(() => setMessageError("Неправильные почта или пароль."))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("searchMovies");
    localStorage.removeItem("searchList");
    localStorage.removeItem("searchValue");
    localStorage.removeItem("checkbox");
    localStorage.clear();
    setCurrentUser({});
    setSaveMovies([]);
    setSearchValue("");
    setFilterMovies([]);
    setloggedIn(false);
    history.push("/");
  };

  const addNewMovies = (data) => {
    mainApi
      .addNewMovies(data)
      .then((res) => {
        const newSaveMovie = [...saveMovies, { ...res, id: res.movieId }];
        setSaveMovies(newSaveMovie);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardDelete = (data) => {
    mainApi
      .deleteCard(data._id)
      .then((res) => {
        if (res) {
          const deleteMovie = saveMovies.filter(
            (movie) => movie.id !== data.id
          );
          setSaveMovies(deleteMovie);
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} />
        <main className="main-content">
          {isLoading ? <Preloader /> : ""}
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <ProtectedRoute
              handleAction={handleAction}
              isSavedMovie={isSavedMovie}
              messageError={messageError}
              movies={filterMovies}
              handleSearchMovies={handleSearchMovies}
              searchValue={searchValue}
              loggedIn={loggedIn}
              path="/movies"
              component={Movies}
            ></ProtectedRoute>
            <ProtectedRoute
              loggedIn={loggedIn}
              messageError={messageError}
              movies={saveMovies}
              onMoviesDelete={handleCardDelete}
              handleSaveMovies={handleSaveMovies}
              path="/saved-movies"
              component={SavedMovies}
            ></ProtectedRoute>
            <ProtectedRoute
              loggedIn={loggedIn}
              isFail={isFail}
              currentUser={currentUser}
              isSuccess={isSuccess}
              signOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              path="/profile"
              component={Profile}
            ></ProtectedRoute>
            <Route path="/signup">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Register
                  messageError={messageError}
                  onRegister={handleRegisterSubmit}
                />
              )}
            </Route>
            <Route path="/signin">
              {loggedIn ? (
                <Redirect to="/movies" />
              ) : (
                <Login
                  messageError={messageError}
                  onLogin={handleLoginSubmit}
                />
              )}
            </Route>
            <Route component={NotFound}></Route>
          </Switch>
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
