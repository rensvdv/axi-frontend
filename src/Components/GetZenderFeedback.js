import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetZenderFeedback({ teamlid, onClick }) {
  const [feedbackObjecten, setFeedbackObjecten] = useState([]);
  const [feedbackObjectenFilter, setFeedbackObjectenFilter] = useState([]);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState([]);
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
      if (teamlid.soort === "feedback") {
        const feedbackGefilterd = feedbackObjecten.filter((feedback) => feedback.ontvanger.id === teamlid.ontvanger.id);
        setFeedbackObjectenFilter(feedbackGefilterd);
      } else {
        const feedbackGefilterd = feedbackObjecten.filter((feedback) => feedback.ontvanger.id === teamlid.id);
        setFeedbackObjectenFilter(feedbackGefilterd);
      }
    } else {
      setFeedbackObjectenFilter(feedbackObjecten);
    }
  }, [teamlid, feedbackObjecten]);

  const handleClick = (feedback) => {
    setSelectedFeedbackId(feedback.id);
    onClick(feedback);
  };

  return (
    <div className={"list-group"}>
      {feedbackObjectenFilter.length === 0 ? (
        <div>No feedback available.</div>
      ) : (
        feedbackObjectenFilter.map((feedback) => (
          <div
            key={feedback.id}
            onClick={() => handleClick(feedback)}
            className={`list-group-item list-group-item-action ${feedback.id === selectedFeedbackId ? "active" : ""}`}
            aria-current={"true"}
          >
            <div className={"d-flex justify-content-between"}>
              <h6 className={"mb-1"}>Aan: {feedback.ontvanger.naam}</h6>
            </div>
            <div className={"text-start"}>{feedback.givenFeedback} </div>
          </div>
        ))
      )}
    </div>
  );
}
