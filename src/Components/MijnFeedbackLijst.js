import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MijnFeedbackLijst({ onClick }) {
  const [feedbackObjecten, setFeedbackObjecten] = useState([]);
  sessionStorage.setItem("id", 2);
  sessionStorage.setItem("naam", "Millo");

  useEffect(() => {
    //Bij het laden van MijnFeedbackLijst wordt alle gekregen feedback van de gebruiker opgehaald
    axios
      .get("https://localhost:7145/feedbackAPI/Feedback/getmijnfeedback/" + sessionStorage.getItem("id"))
      .then((response) => {
        setFeedbackObjecten(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className={"list-group"}>
      {feedbackObjecten &&
        feedbackObjecten.map((feedback) => (
          /*Deze onclick verwijst naar de onclick uit MijnFeedback, doordat deze als property is meegegeven */
          <div key={feedback.id} onClick={() => onClick(feedback)}>
            <div className={"list-group-item list-group-item-action"} aria-current={"true"}>
              <div className={"d-flex justify-content-between"}>
                <h5 className={"mb-1"}>Zender: {feedback.zender.naam}</h5>
              </div>
              <p className={"mb-1 text-start"}>{feedback.givenFeedback}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
