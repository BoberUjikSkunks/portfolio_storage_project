import React from 'react';
import './style/App.css';
import AchievementCard from "./components/AchievementCard/AchievementCard";

function App() {
  return (
    <div className="App">
      <AchievementCard isVerificated={true}></AchievementCard>
    </div>
  );
}

export default App;
