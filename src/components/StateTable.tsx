import React from "react";

interface StateTableProps {
  regional: {
    loc: string;
    totalConfirmed: number;
    discharged: number;
    deaths: number;
  }[];
}

const StateTable: React.FC<StateTableProps> = ({ regional }) => (
  <div className="state-table-container">
    <h4>State-wise Data</h4>
    <table className="state-table">
      <thead>
        <tr>
          <th>State</th>
          <th>Total</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {regional.map((state) => (
          <tr key={state.loc}>
            <td>{state.loc}</td>
            <td>{state.totalConfirmed.toLocaleString()}</td>
            <td>{(state.totalConfirmed - state.discharged - state.deaths).toLocaleString()}</td>
            <td>{state.discharged.toLocaleString()}</td>
            <td>{state.deaths.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StateTable; 