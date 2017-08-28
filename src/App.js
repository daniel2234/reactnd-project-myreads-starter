import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBar from './components/SearchBar'
import BookShelf from './components/BookShelf'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf/>
        )}/>
         <Route path="/search" render={() => (
          <SearchBar/>
        )}/>
      </div>
    )
  }
}

export default BooksApp