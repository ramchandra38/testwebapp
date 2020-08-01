import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import PostList from './components/PostList'


//App
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Route exact path='/' component={PostList} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);