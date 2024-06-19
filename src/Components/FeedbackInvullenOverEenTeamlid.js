import React, { useState } from "react";
import axios from "axios";
import GetLijsten from "../Components/GetLijsten";
import GetVragen from "../Components/GetVragen";

export default function FeedbackInvullenOverEenTeamlid({ teamlid }) {
  const [geselecteerdeLijst, setGeselecteerdeLijst] = useState(null);

  const handleClick = (lijst) => {
    //Bij het aanklikken van een object wordt de usestate geupdate naar het geklikte object
    setGeselecteerdeLijst(lijst);
  };
  const [feedbackText, setFeedbackText] = useState("");
  const [status, setStatus] = useState(undefined);

  const handleSubmit = () => {
    const feedbackData = {
      givenFeedback: feedbackText,
      actief: true,
      zender: {
        id: sessionStorage.getItem("id"),
      },
      ontvanger: {
        id: teamlid.id,
      },
    };
    console.log(feedbackData);
    axios
      .post("https://localhost:7145/feedbackAPI/Feedback/maakfeedback", feedbackData)
      .then((response) => {
        console.log(response.status, response.data);
        setStatus({ type: "success" });
        setFeedbackText("");
      })
      .catch((error) => {
        console.error(error);
        setStatus({ type: "error", error });
      });
  };

  //Er wordt eerst gecontroleerd of er een teamlid geselecteerd is
  if (!teamlid) {
    return <h3>Geen gebruiker geselecteerd</h3>;
  }

  //Als er wel een teamlid is geselecteerd, dan wordt het feedback formulier getoond
  return (
    <div className={"card text-center h-100"}>
      <div className={"card-body"}>
        <h3>{teamlid.naam}</h3>
        <label className={"form-label"}>Geef feedback over {teamlid.naam}</label>
        <textarea
          className={"form-control"}
          rows={"5"}
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        ></textarea>{" "}
        <div className="row">
          <br />
          <div className={"col-3 gy-2"}>
            <GetLijsten TeamId={1} onClick={(lijst) => handleClick(lijst.id)} />
          </div>
          <div className={"col-7 gy-2"}>
            <GetVragen LijstId={geselecteerdeLijst} onClick={(obj) => handleClick(obj)} />
          </div>
        </div>
        <br />
        <button className={"btn btn-primary"} onClick={handleSubmit}>
          Verzenden
        </button>
        <br /> <br />
        {status?.type === "success" && (
          <div className="alert alert-success" role="alert">
            Feedback verstuurd!
          </div>
        )}
        {status?.type === "error" && (
          <div className="alert alert-danger" role="alert">
            Er is een fout opgetreden
          </div>
        )}
      </div>
    </div>
  );
}
