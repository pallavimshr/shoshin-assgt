import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DataCard from './components/DataCard'; 
import StatisticsCard from './components/StatisticsCard';
import Announcement from './components/Announcement';
import RecentActivity from './components/RecentActivity';
import UpcomingSchedule from './components/UpcomingSchedule';
import './App.css';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        <Navbar />
        <h1>Dashboard</h1>
        <div className="dashboard-content">
          <div className="column column-1">
            <div className="row">
              <DataCard 
                title="Available Position" 
                bigText="24" 
                description="4 Urgently Needed" 
                backgroundColor="#f8d7da" 
                descriptionColor="#721c24" 
              />
              <DataCard 
                title="Job Open" 
                bigText="10" 
                description="4 Active Hiring" 
                backgroundColor="#cce5ff" 
                descriptionColor="#004085" 
              />
              <DataCard 
                title="New Employees" 
                bigText="24" 
                description="4 Departments" 
                backgroundColor="#FDEBF9" 
                descriptionColor="#c2185b" 
              />
            </div>
            <div className="row">
              <StatisticsCard 
                title="Total Employees" 
                bigText="216" 
                smallText1="120 Men" 
                smallText2="96 Women" 
                picture="/Frame 52.png" 
              />
              <StatisticsCard 
                title="Talent Request" 
                bigText="16" 
                smallText1="6 Men" 
                smallText2="10 Women" 
                picture="/Frame 52 (1).png" 
              />
            </div>
            <div className="row">
              <Announcement />
            </div>
          </div>

          <div className="column column-2">
          <div className="column-2-element element-1"><RecentActivity/></div>
          <div className="column-2-element element-2"><UpcomingSchedule/></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
