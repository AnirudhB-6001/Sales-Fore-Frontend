import React, { useState } from 'react';
import axios from 'axios';

const ForecastForm = () => {
    const [formData, setFormData] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: ''
    });

    const [forecastResults, setForecastResults] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send data to the new advanced-forecast route
            const response = await axios.post('http://localhost:5000/api/advanced-forecast', formData);
            setForecastResults(response.data);
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    return (
        <div>
            <h1>Sales Forecasting Tool</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Quarter 1 Sales</label>
                    <input type="number" name="q1" value={formData.q1} onChange={handleChange} />
                </div>
                <div>
                    <label>Quarter 2 Sales</label>
                    <input type="number" name="q2" value={formData.q2} onChange={handleChange} />
                </div>
                <div>
                    <label>Quarter 3 Sales</label>
                    <input type="number" name="q3" value={formData.q3} onChange={handleChange} />
                </div>
                <div>
                    <label>Quarter 4 Sales</label>
                    <input type="number" name="q4" value={formData.q4} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>

            {forecastResults && (
                <div>
                    <h2>Advanced Forecast Results</h2>
                    <p>Average Growth Rate: {forecastResults.avgGrowthRate}%</p>
                    <p>Total Sales for the Year: ${forecastResults.totalSales}</p>
                    <p>Average Quarterly Sales: ${forecastResults.avgQuarterlySales}</p>
                    <p>Forecasted Total Sales for Next Year: ${forecastResults.totalForecastedSales}</p> {/* Updated this line */}
                    <h3>Projected Sales for Next Year:</h3>
                    <ul>
                        {forecastResults.projectedQuarters.map((quarter, index) => (
                            <li key={index}>Quarter {index + 1}: ${quarter}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ForecastForm;
