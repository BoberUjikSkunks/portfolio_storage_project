import React from 'react';
import './style/App.css';
import AchievementCard from "./components/AchievementCard/AchievementCard";
import SidePanel from './components/SidePanel/SidePanel';

function App() {
	return (
		<div className="App">
			<SidePanel></SidePanel>
			
			{/* это заглушка, потом отдельный компонент сделаем */}
			<div className='page-content'>
				<AchievementCard isVerificated={true}></AchievementCard>
			</div>

		</div>
	);
}

export default App;
