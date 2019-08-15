import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import UserCard from './UserCard';
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
      <div>
        Region:&nbsp;
        <select
          onChange={this.changeRegion}
          className="select__change-region"
        >
          <option>All</option>
          {
            [...new Set(users.map(user => user.region))].map(
              region => (
                <option key={region}>
                  {region}
                </option>
              )
            )
          }
        </select>

        <div>
          {
            region === 'All'
              ? users.map(user => <UserCard user={user} key={user.id}/>)
              
              : users
                  .filter(user => user.region === region)
                  .map(user => <UserCard user={user} key={user.id}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
