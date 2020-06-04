import React from 'react';
import Profile from './Profile/Profile';
import user from './user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/statistical-data.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
  </>
);

export default App;
