import React, { useState } from "react";
import AlleTeamledenLijst from "../Components/AlleTeamledenLijst";
import FeedbackInvullenOverEenTeamlid from "../Components/FeedbackInvullenOverEenTeamlid";
import GetZenderFeedback from "../Components/GetZenderFeedback";
import FeedbackUpdaten from "../Components/FeedbackUpdaten";

export default function FeedbackGeven() {
  const [geselecteerdObject, setGeselecteerdObject] = useState(null);
  const [status, setStatus] = useState(null);

  const handleClick = (obj, source) => {
    //er worden op dit moment 2 verschillende soorten componenten door deze methode gebruikt
    //als de onclick komt uit alleteamledenlijst is het een teamlid
    //als de onclick vanuit getzenderfeedback komt is het een feedback object
    if (source === "teamledenLijst") {
      obj.soort = "teamlid";
      setGeselecteerdObject(obj);
      setStatus({ type: "post" });
    } else if (source === "zenderFeedback") {
      obj.soort = "feedback";
      setGeselecteerdObject(obj);
      setStatus({ type: "update" });
    }
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-3 gy-2"}>
          <h5>Jouw teamleden:</h5>
          <AlleTeamledenLijst onClick={(obj) => handleClick(obj, "teamledenLijst")} />
        </div>
        <div className={"col-6 gy-2"} style={{ height: "90vh" }}>
          <div className={"h-100"}>
            {status?.type === "post" && <FeedbackInvullenOverEenTeamlid teamlid={geselecteerdObject} />}
            {status?.type === "update" && <FeedbackUpdaten feedback={geselecteerdObject} />}
          </div>
        </div>
        <div className={"col-3 gy-2"}>
          <h5>Recent gegeven feedback: </h5>
          <GetZenderFeedback teamlid={geselecteerdObject} onClick={(obj) => handleClick(obj, "zenderFeedback")} />
        </div>
      </div>
    </div>
  );
}
