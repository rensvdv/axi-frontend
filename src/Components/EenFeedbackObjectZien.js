import React from "react";

export default function EenFeedbackObjectZien({ geselecteerdeFeedback }) {
    if (!geselecteerdeFeedback) {
        return (
            <div className="card text-center h-100">
                <div className={"card-body"}>
                    <h3 className="card-title">Geen feedback geselecteerd</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="card text-center h-100">
            <div className="card-body">
                <h3 className="card-title">{geselecteerdeFeedback.naam}</h3>
                <p className="card-text">{geselecteerdeFeedback.beschrijving}</p>
            </div>
        </div>
    );
}
