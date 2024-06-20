import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetLijsten({ onClick, TeamId }) {
  const [lijsten, setLijsten] = useState([]);
  const [selectedLijstId, setSelectedLijstId] = useState([]);

  useEffect(() => {
    //Bij het laden van GetLijsten wordt alle vragen van een vragenlijst opgehaald
    axios
      .get("https://localhost:7145/feedbackAPI/Lijst/GetLijstenTeam/" + TeamId)
      .then((response) => {
        setLijsten(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleClick = (lijst) => {
    setSelectedLijstId(lijst.id);
    onClick(lijst);
  };

  return (
    <div className="list-group">
      <h4>Vragenlijst:</h4>
      {lijsten.length === 0 ? (
        <div>Geen lijsten beschikbaar</div>
      ) : (
        lijsten.map((lijst) => (
          <div key={lijst.id} onClick={() => handleClick(lijst)}>
            <div className={`list-group-item list-group-item-action ${lijst.id === selectedLijstId ? "active" : ""}`}>
              <div className="d-flex justify-content-between">
                <p className="mb-1">{lijst.name}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
