import React from "react";

const InfoPanel: React.FC = () => (
  <div className="dashboard-info-panel">
    <div className="live-update">
      <h4>
        Live Update <span style={{ fontSize: 12, color: "#888" }}>(min ago)</span>
      </h4>
      <ul>
        <li style={{ color: "#0088FE" }}>2 new cases in Pakistan</li>
        <li style={{ color: "#00C49F" }}>4 new cases in Singapore</li>
        <li style={{ color: "#0088FE" }}>1 new case in Thailand</li>
        <li style={{ color: "#0088FE" }}>5 new cases in Taiwan</li>
        <li style={{ color: "#0088FE" }}>8 new cases in Japan</li>
        <li style={{ color: "#00C49F" }}>1 new case in Brazil</li>
        <li style={{ color: "#FF8042" }}>1st case in Ecuador</li>
        <li style={{ color: "#FF8042" }}>1st case in Mexico</li>
      </ul>
    </div>
    <div className="symptoms-card">
      <img
        src="https://img.icons8.com/color/96/000000/sick.png"
        alt="Symptoms"
      />
      <h4>Symptoms</h4>
      <p>Read carefully 5 symptoms of Covid-19</p>
    </div>
  </div>
);

export default InfoPanel; 