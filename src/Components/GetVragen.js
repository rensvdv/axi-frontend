import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetLijsten({ onClick, LijstId }) {
  const [vragen, setVragen] = useState([]);

  useEffect(() => {
    //Bij het laden van GetLijsten wordt Vragenlijsten opgehaald van een bepaalde team
    axios
      .get("https://localhost:7145/feedbackAPI/Vraag/GetVragenByLijstId/" + LijstId)
      .then((response) => {
        setVragen(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="list-group">
      <h4>Vragen:</h4>
      {vragen.length === 0 ? (
        <div>Geen vragen beschikbaar</div>
      ) : (
        vragen.map((vraag) => (
          <div key={vraag.id} onClick={() => onClick(vraag)}>
            <div className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex justify-content-between">
                <p className="mb-1">{vraag.kwestie}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
