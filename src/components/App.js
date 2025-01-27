import React from "react";
import UserProfile from "./UserProfile";
import NewsFeed from "./NewsFeed";
import Comments from "./Comments";
import Notifications from "./Notifications";


const App = () => {
  return (
    <div>
      <div className="header">
        <Notifications />
      </div>
      <div className="main-content">
        <UserProfile />
        <NewsFeed />
        <Comments />
      </div>
    </div>
  );
};

export default App;
