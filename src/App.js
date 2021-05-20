import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import MainPage from './components/MainPage/MainPage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <>
      <Switch>
	      <Route exact path = "/" component={MainPage}/>
	      <Route exact path = "/movie/:id" component={MovieCard}/>
      </Switch>
      </>
  );
}

export default App;
