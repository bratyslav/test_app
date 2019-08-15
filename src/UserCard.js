import React from 'react';

const UserCard = ({ user }) => {
  console.log(user)

  return (
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
  );  
};

export default UserCard;