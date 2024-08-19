import React from 'react'
import GroupList from './Components/GroupList';
import FriendList from './Components/FriendList';
import UserList from './Components/UserList';
import FriendRequest from './Components/FriendRequest';
import MyGroups from './Components/MyGroups';
import BlockedUsers from './Components/BlockedUsers';
import Notification from './Components/Notification';

const Home = () => {
  return (
    <section className="py-8 flex w-full  gap-5">
      <div>
        <GroupList />
        <FriendRequest />
      </div>
      <div>
        <FriendList />
        <MyGroups />
      </div>
      <div>
        <UserList />
        <BlockedUsers />
      </div>
      
    </section>
  );
}

export default Home