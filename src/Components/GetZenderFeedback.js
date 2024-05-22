import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetZenderFeedback({ teamlid, onClick }) {
  const [feedbackObjecten, setFeedbackObjecten] = useState([]);
  const [feedbackObjectenFilter, setFeedbackObjectenFilter] = useState([]);

  useEffect(() => {
    axios
        .get("https://localhost:7145/feedbackAPI/Feedback/getzenderfeedback/" + sessionStorage.getItem("id"))
        .then((response) => {
          setFeedbackObjecten(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  useEffect(() => {
    if (teamlid) {

      if(teamlid.soort === 'feedback') {
        const feedbackGefilterd = feedbackObjecten.filter(feedback => feedback.ontvanger.id === teamlid.ontvanger.id);
        setFeedbackObjectenFilter(feedbackGefilterd);
      }
      else {
        const feedbackGefilterd = feedbackObjecten.filter(feedback => feedback.ontvanger.id === teamlid.id);
        setFeedbackObjectenFilter(feedbackGefilterd);
      }

    } else {
      setFeedbackObjectenFilter(feedbackObjecten);
    }
  }, [teamlid, feedbackObjecten]);

  return (
      <div className={"list-group"}>
        {feedbackObjectenFilter.length === 0 ? (
            <div>No feedback available.</div>
        ) : (
            feedbackObjectenFilter.map(feedback => (
                <div key={feedback.id} onClick={() => onClick(feedback)}>
                  <div className={"list-group-item list-group-item-action"} aria-current={"true"}>
                    <div className={"d-flex justify-content-between"}>
                      <h6 className={"mb-1"}>Aan: {feedback.ontvanger.naam}</h6>
                      <small>{feedback.id}</small>
                    </div>
                    <p className={"mb-1"}>{feedback.givenFeedback}</p>
                  </div>
                </div>
            ))
        )}
      </div>
  );
}
