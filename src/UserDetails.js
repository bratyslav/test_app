import React from 'react';

const UserDetails = ({ user }) => (
  <div className="user-details">
    <div className="user-details__avatar">
      <img
        src={user.avatar.sizes['240x240']}
        alt="avatar"
      />
    </div>

    <h1>{user.name}</h1>
    <div>{user.region}</div>
    <div className="user-details__introduction">{user.introduction}</div>
    <form method="POST">
      <textarea />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default UserDetails;