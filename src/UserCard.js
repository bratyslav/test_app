import React from 'react';
import { NavLink } from 'react-router-dom';

const UserCard = ({ user }) => {
  console.log(user)

  return (
    <NavLink to={`/${user.id}`} className="user-card_link">
      <div className="user-card">
        <div className="user-card__avatar">
          <img
            src={user.avatar.sizes['160x160']}
            alt="avatar"
          />
        </div>

        <div>
          <h2>{user.name}</h2>
          <div>Region: {user.region}</div>
          <div>University: {user.university.name}</div>
        </div>  
      </div>
    </NavLink>
  );  
};

export default UserCard;