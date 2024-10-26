// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WasteCollectionSchedule from './components/WasteCollectionSchedule';
import RouteOptimization from './components/RouteOptimization';
import EducationalContent from './components/EducationalContent';



const App = () => {
    return (
      <Router>
      <div>
        <h1>Waste Management App</h1>
        <Routes>  // Replace Switch with Routes
          <Route path="/schedules" component={WasteCollectionSchedule} />
          <Route path="/optimize" component={RouteOptimization} />
          <Route path="/educational" component={EducationalContent} />
        
        </Routes>
      </div>
    </Router>
    );
};

export default App;
