import React, { useState } from "react";
import axios from "axios";

export default function FeedbackInvullenOverEenTeamlid({ geselecteerdTeamlid }) {
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
        id: geselecteerdTeamlid.id,
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
  if (!geselecteerdTeamlid) {
    return <h3>Geen gebruiker geselecteerd</h3>;
  }

  //Als er wel een teamlid is geselecteerd, dan wordt het feedback formulier getoond
  return (
    <div className={"card text-center h-100"}>
      <div className={"card-body"}>
        <h3>{geselecteerdTeamlid.naam}</h3>
        <label className={"form-label"}>Geef feedback over {geselecteerdTeamlid.naam}</label>
        <textarea
          className={"form-control"}
          rows={"5"}
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
        ></textarea>{" "}
        <br />
        <button className={"btn btn-primary"} onClick={handleSubmit}>
          Verzenden
        </button>{" "}
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
