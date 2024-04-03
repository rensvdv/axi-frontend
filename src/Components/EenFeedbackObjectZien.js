import React from "react";

export default function EenFeedbackObjectZien({geselecteerdeFeedback}) {
    //Er wordt eerst gecontroleerd of er feedback geselecteerd is
    if (!geselecteerdeFeedback) {
        return (
            <div className={"card text-center h-100"}>
                <div className={"card-body"}>
                    <h3 className={"card-title"}>Geen feedback geselecteerd</h3>
                </div>
            </div>
        );
    }

    //Als er wel feedback geselecteerd is, dan wordt feedback getoond
    return (
        <div className={"card text-center h-100"}>
            <div className={"card-body"}>
                <h3 className={"card-title"}>{geselecteerdeFeedback.zender.naam}</h3>
                <p className={"card-text"}>{geselecteerdeFeedback.givenFeedback}</p>
                Ontvanger: {geselecteerdeFeedback.ontvanger.naam}
            </div>
        </div>
    );
}
