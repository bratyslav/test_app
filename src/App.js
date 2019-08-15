import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import UserDetailsPage from './UserDetailsPage';
import { data } from './data';

class App extends Component {
  state = {
    users: [],
    region: 'All'
  };

  async componentDidMount() {
    const response = await data();

    this.setState({
      users: response.data.users
    })
  };

  changeRegion = (event) => {
    this.setState({ region: event.target.value });
  };

  render() {
    const { users, region } = this.state;

    return (
      <Switch>
        <Route path="/" exact render={(params) => (
            <UserList
              users={users}
              region={region}
              changeRegion={this.changeRegion}
              {...params}
            />
          )}
        />

        <Route path="/:userId" render={(params) => (
            <UserDetailsPage
              users={users}
              {...params}
            />
          )}
        />
      </Switch>

    );
  }
}

export default App;