import React from "react";
import { Redirect, Route, Switch, useHistory} from "react-router-dom";
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
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setloggedIn] = React.useState(false);
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);
  const [isShortMoviesChecked, setIsShortMoviesChecked] = React.useState(false);
  const [allMovies, setAllMovies] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth.checkToken(jwt).then((res) => {
        setloggedIn(true);
      
      mainApi.getProfileInfo().then((res) => {
        setCurrentUser(res);
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        getMovies()
      });
      history.push("/");
    })
    .catch((err) => {
      console.log(err)
      localStorage.removeItem('jwt')
    });
    }
    moviesApi
    .getMovies()
    .then((data) => {
      setMovies(data)
      localStorage.setItem('movies', JSON.stringify(data));
    })
    .catch((err) => console.log(err));
  }, [history]);

  const getMovies = () => {
    setIsLoading(true);
    mainApi.getMovies((res) => {
      const movieList = res.map((item) => {
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
      setSaveMovies(movieList);
    })
    .catch((err) => console.log(err))
    .finally(() => setIsLoading(false))
  };

  const handleShortMoviesChecked = (e) => {
    setIsShortMoviesChecked(e.target.checked);
  }

  const searchMovies = (word) => {
    setIsLoading(true);
    setMovies([]);
    setNotFoundMovies(false);

      if(allMovies.length === 0 ) {
        moviesApi.getMovies()
          .then((movies) => {
              setAllMovies(movies)
              const searchResult = handleSearchMovies(movies, word)
              if(searchResult.length === 0) {
                setNotFoundMovies(true);
                setMovies([]);
              } else {
                localStorage.setItem('movies', JSON.stringify(searchResult))
                setMovies(JSON.parse(localStorage.getItem('movies')));
                setNotFoundMovies(false);
              }})
          .catch((err) => {
            console.log(`Ошибка ${err}, попробуйте еще раз`)
          })
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        const searchResult = handleSearchMovies(allMovies, word)
        if(searchResult.length === 0) {
          setNotFoundMovies(true);
          setMovies([]);
          setIsLoading(false);
        } else if(searchResult.length !== 0) {
          localStorage.setItem('movies', JSON.stringify(searchResult));
          setMovies(JSON.parse(localStorage.getItem('movies')));
          setIsLoading(false);
          setNotFoundMovies(false);
        }
      }
  }

  const handleSearchMovies = (movies, word) => {

    const filterRegex = new RegExp(word, 'gi');
    return movies.filter((movie) => {
      if (isShortMoviesChecked) {
        return movie.duration <= 40 && filterRegex.test(movie.nameRU)
      } else {
        return filterRegex.test(movie.nameRU)
      }
    })
  }


  const handleCardDelete = (movieId) => {
    setIsLoading(true);
    mainApi
      .deleteCard(movieId)
      .then(() => {
        setSaveMovies((state) =>
          state.filter((item) => item._id !== movieId._id)
        );
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => setIsLoading(false));
  };

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    mainApi
      .setProfileInfo(name, email)
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
          history.push("/signin")
          
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }
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
          mainApi.getProfileInfo()
          .then((data) => {
            setCurrentUser(data)
            getMovies();
          })
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false))   
      })
      
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setSaveMovies([]);
    setloggedIn(false);
    history.push("/")
  };

  // const handleCardLike = (card) => {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some((i) => i === currentUser._id);
  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api
  //     .changeLikeCardStatus(card._id, isLiked)
  //     .then((newCard) => {
  //       setCards((state) =>
  //         state.map((c) => (c._id === card._id ? newCard : c))
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(`${err}`);
  //     });
  // };

  const handleSaveMovies = (data) => {
    setIsLoading(true);
    mainApi
      .addNewMovies(data)
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
        <Header loggedIn={loggedIn} />
        <main className="main-content">
          {isLoading ? (
            <Preloader />
          ) : (
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <ProtectedRoute
                onSaveMovies={handleSaveMovies}
                onMoviesDelete={handleCardDelete}
                saveMovies={saveMovies}
                movies={movies}
                onSearchMovies={searchMovies}
                notFoundMovies={notFoundMovies}
                onShortMoviesCheck={handleShortMoviesChecked}
                loggedIn={loggedIn}
                path="/movies"
                component={Movies}
              ></ProtectedRoute>
              <ProtectedRoute
                onSaveMovies={handleSaveMovies}
                loggedIn={loggedIn}
                movies={saveMovies}
                onShortMoviesCheck={handleShortMoviesChecked}
                notFoundMovies={notFoundMovies}
                onMoviesDelete={handleCardDelete}
                path="/saved-movies"
                component={SavedMovies}
              ></ProtectedRoute>
              <ProtectedRoute
                loggedIn={loggedIn}
                signOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
                path="/profile"
                component={Profile}
              ></ProtectedRoute>
              <Route path="/signup">
                {loggedIn ? <Redirect to="/movies" /> : 
                <Register onRegister={handleRegisterSubmit} />}
              </Route>
              <Route path="/signin">
                {loggedIn ? <Redirect to="/movies" /> : 
                <Login onLogin={handleLoginSubmit} />}
              </Route>
              <Route path="/404">
                <NotFound />
              </Route>
            </Switch>
          )}
        </main>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
