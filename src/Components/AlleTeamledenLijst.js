import React from "react";

export default function AlleTeamledenLijst({onClick}) {
    const teamleden = [
        { id: 2, naam: "Millo", functie: "Teamleider"},
        { id: 3, naam: "Amin", functie: "Teamlid"},
        { id: 4, naam: "Rens", functie: "Teamlid"}
    ];

    return (
        <div className="list-group">
            {/*Er wordt door alle teamleden heen gegaan met de map functie, ieder teamlid object ziet er hetzelfde uit */}
            {teamleden.map((teamlid) => (
                /*Deze onclick verwijst naar de onclick uit FeedbackGeven, doordat deze als property is meegegeven */
                <div key={teamlid.id} onClick={() => onClick(teamlid)}>
                    <div className={"list-group-item list-group-item-action"} aria-current={"true"}>
                        <div className={"d-flex justify-content-between"}>
                            <h5 className={"mb-1"}>{teamlid.naam}</h5>
                        </div>
                        <p className={"mb-1"}>{teamlid.functie}</p>
                    </div>
                </div>
            ))}
        </div>


    );
}