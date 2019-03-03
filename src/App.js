import React, { Component } from "react";
import "./App.css";
import reducer from "./Reducers/index";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import Login from "./Containers/Login";
import Movies from "./Containers/Movies";
import { Route, Switch, Redirect } from "react-router-dom";
import MoviesForm from "./Components/moviesForm";
import PrivateRoute from "./Components/PrivateRoute";

let store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxProvider store={store}>
          <main className="container">
            <Switch>
              <Route path="/movies/:id" component={MoviesForm} />
              <PrivateRoute path="/movies" component={Movies} />
              <Route path="/login" component={Login} />
              <Route path="/" exact component={Login} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </ReduxProvider>
      </div>
    );
  }
}

export default App;
