import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AlleTeamledenLijst({ onClick }) {
  const [teamleden, setTeamleden] = useState([]);
  const userId = parseInt(sessionStorage.getItem("id"));

  useEffect(() => {
    //Bij het laden van MijnFeedbackLijst wordt alle gekregen feedback van de gebruiker opgehaald
    axios
      .get("https://localhost:7145/feedbackAPI/Gebruiker/getallgebruikers")
      .then((response) => {
        setTeamleden(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="list-group">
      {/*Er wordt door alle teamleden heen gegaan met de map functie, ieder teamlid object ziet er hetzelfde uit */}
      {teamleden
        .filter((teamlid) => teamlid.id !== userId)
        .map((teamlidFilter) => (
          /*Deze onclick verwijst naar de onclick uit FeedbackGeven, doordat deze als property is meegegeven */
          <div key={teamlidFilter.id} onClick={() => onClick(teamlidFilter)}>
            <div className={"list-group-item list-group-item-action"} aria-current={"true"}>
              <div className={"d-flex justify-content-between"}>
                <h5 className={"mb-1"}>{teamlidFilter.naam}</h5>
              </div>
              <p className={"mb-1 text-start"}>Teamlid</p>
            </div>
          </div>
        ))}
    </div>
  );
}
