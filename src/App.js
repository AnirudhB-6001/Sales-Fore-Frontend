import React from 'react';
import './App.css';
import ForecastForm from './components/ForecastForm'; // Import the new component

function App() {
    return (
        <div className="App">
            <h1>Sales Forecasting Tool</h1>
            <ForecastForm /> {/* Include the ForecastForm component */}
        </div>
    );
}

export default App;
