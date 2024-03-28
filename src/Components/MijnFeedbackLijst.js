import React from 'react';

export default function MijnFeedbackLijst({ onClick }) {
    const feedbackObjecten = [
        { id: 1, naam: "Feedback 1", beschrijving: "Beschrijving van Feedback object 1", datum: "25-03-2024"},
        { id: 2, naam: "Feedback 2", beschrijving: "Beschrijving van Feedback object 2", datum: "28-03-2024"},
        { id: 3, naam: "Feedback 3", beschrijving: "Beschrijving van Feedback object 3", datum: "28-03-2024"},
    ];

    return (
        <div className="list-group">
            {feedbackObjecten.map((feedback) => (
                <div key={feedback.id} onClick={() => onClick(feedback)}>
                    <div className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-1">{feedback.naam}</h5>
                            <small>{feedback.datum}</small>
                        </div>
                        <p className="mb-1">Feedback.....</p>
                    </div>
                </div>
            ))}
        </div>


        );
}
