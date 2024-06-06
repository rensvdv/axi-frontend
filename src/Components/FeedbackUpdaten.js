import React, {useEffect, useState} from "react";
import axios from "axios";

export default function FeedbackUpdaten({feedback}) {
    const [feedbackText, setFeedbackText] = useState("");
    const [status, setStatus] = useState(undefined);

    const handleSubmit = () => {
        const feedbackData = {
            id: feedback.id,
            givenFeedback: feedbackText,
            actief: true,
            zender: {
                    id: sessionStorage.getItem("id"),
                },
            ontvanger: {
                    id: feedback.ontvanger.id
                }
        };

        axios.put("https://localhost:7145/feedbackAPI/Feedback/updatefeedback", feedbackData)
            .then(response => {
                console.log(response.status, response.data);
                setStatus({ type: 'success' });
                setFeedbackText("");
            })
            .catch(error => {
                console.error(error);
                setStatus({ type: 'error', error });
            });
    }

    useEffect(() => {
        if (feedback) {
            setFeedbackText(feedback.givenFeedback || "");
        }
    }, [feedback]);

    //Er wordt eerst gecontroleerd of er een teamlid geselecteerd is
    if(!feedback) {
        return (
            <h3>
                Geen feedback geselecteerd
            </h3>
        )
    }

    return (
        <div className={"card text-center h-100"}>
            <div className={"card-body"}>
                <h3>{feedback.ontvanger.naam}</h3>
                <label className={"form-label"}>Update feedback over {feedback.ontvanger.naam}</label>
                <textarea
                    className={"form-control"}
                    rows={"5"}
                    value={feedbackText}
                    onChange={e => setFeedbackText(e.target.value)}
                >
               </textarea> <br/>
                <button className={"btn btn-secondary"} onClick={handleSubmit}>Opslaan</button>
                <br/> <br/>
                {status?.type === 'success' &&
                    <div className="alert alert-success" role="alert">Feedback opgeslagen!</div>}
                {status?.type === 'error' && (
                    <div className="alert alert-danger" role="alert">Er is een fout opgetreden</div>
                )}
            </div>
        </div>
    )

}