import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetLijsten({ onClick, TeamId }) {
  const [lijsten, setLijsten] = useState([]);

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

  return (
    <div className="list-group">
      {lijsten.length === 0 ? (
        <div>Geen lijsten beschikbaar</div>
      ) : (
        lijsten.map((lijst) => (
          <div key={lijst.id} onClick={() => onClick(lijst)}>
            <div className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex justify-content-between">
                <h5 className="mb-1">{lijst.name}</h5>
              </div>
              <p className={"mb-1 text-start"}>{lijst.id}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
