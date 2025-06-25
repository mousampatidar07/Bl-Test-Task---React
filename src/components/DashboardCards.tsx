import React from "react";

interface DashboardCardsProps {
  unofficial: {
    total: number;
    active: number;
    recovered: number;
    deaths: number;
  } | null;
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ unofficial }) => (
  <div className="dashboard-cards">
    <div className="dashboard-card">
      <span className="card-icon">📈</span>
      <h3>Total Cases</h3>
      <div className="card-value">
        {unofficial?.total?.toLocaleString()}
      </div>
    </div>
    <div className="dashboard-card">
      <span className="card-icon">🟢</span>
      <h3>Active</h3>
      <div className="card-value">
        {unofficial?.active?.toLocaleString()}
      </div>
    </div>
    <div className="dashboard-card">
      <span className="card-icon">💪</span>
      <h3>Recovered</h3>
      <div className="card-value">
        {unofficial?.recovered?.toLocaleString()}
      </div>
    </div>
    <div className="dashboard-card">
      <span className="card-icon">⚰️</span>
      <h3>Deaths</h3>
      <div className="card-value">
        {unofficial?.deaths?.toLocaleString()}
      </div>
    </div>
  </div>
);

export default DashboardCards; 