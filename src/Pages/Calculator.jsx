import React, { useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import "../App.css"


const Calculator = () => {

  const [inputData, setInputData] = useState({
    annualInstalmentAmount: 100000,
    annualInterestRate: 7.1,
    totalNumberOfYears: 15,
  });

  const [chartData, setChartData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/calculate', {
        annualInstalmentAmount: inputData.annualInstalmentAmount,
        annualInterestRate: inputData.annualInterestRate,
        totalNumberOfYears: inputData.totalNumberOfYears,
      });
      const data = response.data;
  
      setChartData({
        labels: ['Investment Amount', 'Total Interest', 'Maturity Value'],
        datasets: [
          {
            data: [data.totalInvestmentAmount, data.totalInterestGained, data.totalMaturityValue],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Yearly Investment:
          <input
            type="range"
            name="annualInstalmentAmount"
            min={10000}
            max={150000}
            value={inputData.annualInstalmentAmount}
            onChange={handleChange}
          />
          {inputData.annualInstalmentAmount}
        </label>
        <br />
        <label>
          Time Period (Years):
          <input
            type="range"
            name="totalNumberOfYears"
            min={2}
            max={15}
            value={inputData.totalNumberOfYears}
            onChange={handleChange}
          />
          {inputData.totalNumberOfYears}
        </label>
        <br />
        <label>
          Rate of Interest:
          <input
            type="number"
            name="annualInterestRate"
            step="0.1"
            value={inputData.annualInterestRate}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>

      <div id="chart-container">
        {chartData && <Doughnut data={chartData}/>}
      </div>
    </div>
  );
};

export default Calculator;
