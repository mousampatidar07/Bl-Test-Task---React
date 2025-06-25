import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashboardCards from "./components/DashboardCards";
import Header from "./components/Header";
import InfoPanel from "./components/InfoPanel";
import Sidebar from "./components/Sidebar";
import StateTable from "./components/StateTable";
import StatusPieChart from "./components/StatusPieChart";

interface UnofficialSummary {
  source: string;
  total: number;
  recovered: number;
  deaths: number;
  active: number;
}

interface RegionalData {
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  totalConfirmed: number;
}

const Dashboard: React.FC = () => {
  const [unofficial, setUnofficial] = useState<UnofficialSummary | null>(null);
  const [regional, setRegional] = useState<RegionalData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.rootnet.in/covid19-in/stats/latest"
        );
        setUnofficial(res.data.data["unofficial-summary"][0]);
        setRegional(res.data.data.regional);
        setLoading(false);
      } catch {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const pieData = [
    { name: "Active", value: unofficial?.active || 0 },
    { name: "Recovered", value: unofficial?.recovered || 0 },
    { name: "Deaths", value: unofficial?.deaths || 0 },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Header />
        {loading && (
          <div style={{ textAlign: "center", marginTop: 40 }}>Loading...</div>
        )}
        {error && (
          <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>
            {error}
          </div>
        )}
        {!loading && !error && (
          <>
            <DashboardCards unofficial={unofficial} />
            <div className="dashboard-content-row">
              <div style={{ flex: 2, minWidth: 320 }}>
                <h4>Current Status</h4>
                <StatusPieChart pieData={pieData} />
              </div>
              <InfoPanel />
            </div>
            <StateTable regional={regional} />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
