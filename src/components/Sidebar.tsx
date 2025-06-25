import React from "react";

const Sidebar: React.FC = () => (
  <aside className="dashboard-sidebar">
    <div style={{ marginBottom: 32 }}>
      <span style={{ fontSize: 32, color: "#fff" }}>🦠</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 32, flex: 1 }}>
      <span
        style={{
          fontSize: 24,
          color: "#fff",
          background: "#fff3",
          borderRadius: 12,
          padding: 8,
        }}
      >
        🏠
      </span>
      <span style={{ fontSize: 24, color: "#fff", opacity: 0.7 }}>📊</span>
      <span style={{ fontSize: 24, color: "#fff", opacity: 0.7 }}>💬</span>
      <span style={{ fontSize: 24, color: "#fff", opacity: 0.7 }}>⚙️</span>
    </div>
  </aside>
);

export default Sidebar; 