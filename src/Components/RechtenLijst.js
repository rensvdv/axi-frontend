import React from "react";

export default function RechtenLijst({ onSelect }) {
    const rechtenLijst = [
        { id: 1, naam: "recht1" },
        { id: 2, naam: "recht2" },
        { id: 3, naam: "recht3" },
        { id: 4, naam: "recht4" },
        { id: 5, naam: "recht5" },
    ];

    return (
        <div className="list-group">
            {rechtenLijst.map((recht) => (
                <div key={recht.id} onClick={() => onSelect(recht)}>
                    <div className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-1">{recht.naam}</h5>
                        </div>
                        <p className="mb-1">{recht.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
