import React from 'react';
import UserDetails from './UserDetails';

const UserDetailsPage = ({ users, match }) => {
  const user = users.find(user => user.id == match.params.userId);

  console.log(user)

  return (
    user
      ? <UserDetails user={user} />
      : ""
  );
};

export default UserDetailsPage;