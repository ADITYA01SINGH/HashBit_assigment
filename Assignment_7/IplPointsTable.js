import React, { useEffect, useState } from 'react';
import './IplPointsTable.css';

const IplPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      });
  }, []);

  return (
    <div className="points-table-container">
      <h1 className="title">IPL Points Table 2022</h1>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.Team}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Wins}</td>
              <td>{team.Losses}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IplPointsTable;