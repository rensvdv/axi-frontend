import React, {useEffect, useState} from "react";
import axios from "axios";

export default function RechtenLijst({ onSelect }) {
    const [rechtenLijst, setRechtenLijst] = useState([])

    useEffect(() => {
        axios
            .get("https://localhost:7145/feedbackapi/Recht/zoekrechten")
            .then((response) => {
                setRechtenLijst(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });


    return (
        <div className="list-group">
            {rechtenLijst.map((recht) => (
                <div key={recht.id} onClick={() => onSelect(recht)}>
                    <div className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-1">{recht.rechtNaam}</h5>
                        </div>
                        <p className="mb-1">{recht.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
