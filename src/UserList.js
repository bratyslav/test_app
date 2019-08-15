import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, region, changeRegion }) => (
  <div>
    Region:&nbsp;
    <select
      onChange={changeRegion}
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

export default UserList;