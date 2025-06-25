import React from "react";

const Header: React.FC = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    }}
  >
    <div>
      <h2
        style={{
          margin: 0,
          color: "#3d2c8d",
          fontWeight: 800,
          fontSize: 28,
        }}
      >
        Covid-19
      </h2>
      <div style={{ color: "#888", fontSize: 15, fontWeight: 500 }}>
        Live Tracker Dashboard
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "8px 16px",
          borderRadius: 20,
          border: "1px solid #eee",
          outline: "none",
          fontSize: 15,
          background: "#f8f8ff",
        }}
      />
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#eee",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        👤
      </span>
    </div>
  </div>
);

export default Header; 