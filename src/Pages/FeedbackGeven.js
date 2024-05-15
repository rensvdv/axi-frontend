import React, { useState } from "react";
import AlleTeamledenLijst from "../Components/AlleTeamledenLijst";
import FeedbackInvullenOverEenTeamlid from "../Components/FeedbackInvullenOverEenTeamlid";
import GetZenderFeedback from "../Components/GetZenderFeedback";
import FeedbackUpdaten from "../Components/FeedbackUpdaten";

export default function FeedbackGeven() {
    const [geselecteerdTeamlid, setGeselecteerdTeamlid] = useState(null);
    const [status, setStatus] = useState(null);

    const handleClick = (teamlid, source) => {
        setGeselecteerdTeamlid(teamlid);

        if (source === 'teamledenLijst') {
            setStatus({ type: "post" });
        } else if (source === 'zenderFeedback') {
            setStatus({ type: "update" });
        }
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-3 gy-2"}>
                    <h5>Jouw teamleden:</h5>
                    <AlleTeamledenLijst onClick={(teamlid) => handleClick(teamlid, 'teamledenLijst')} />
                </div>
                <div className={"col-6 gy-2"} style={{ height: "90vh" }}>
                    <div className={"h-100"}>
                        {status?.type === 'post' &&
                            <FeedbackInvullenOverEenTeamlid geselecteerdTeamlid={geselecteerdTeamlid} />}
                        {status?.type === 'update' && (
                            <FeedbackUpdaten geselecteerdTeamlid={geselecteerdTeamlid} />
                        )}
                    </div>
                </div>
                <div className={"col-3 gy-2"}>
                    <h5>Recent gegeven feedback: </h5>
                    <GetZenderFeedback onClick={(teamlid) => handleClick(teamlid, 'zenderFeedback')} />
                </div>
            </div>
        </div>
    )
}
