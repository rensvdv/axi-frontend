import React from "react";

export default function FeedbackInvullenOverEenTeamlid({geselecteerdTeamlid}) {
    //Er wordt eerst gecontroleerd of er een teamlid geselecteerd is
    if(!geselecteerdTeamlid) {
        return (
            <h3>
                Geen gebruiker geselecteerd
            </h3>
        )
    }

    //Als er wel een teamlid is geselecteerd, dan wordt het feedback formulier getoond
    return (
        <div className={"card text-center h-100"}>
            <div className={"card-body"}>
                <h3>{geselecteerdTeamlid.naam}</h3>
                <label className={"form-label"}>Geef feedback over {geselecteerdTeamlid.naam}</label>
                <textarea className={"form-control"} rows={"5"}></textarea> <br />
                <button className={"btn btn-primary"}>Verzenden</button>
            </div>
        </div>
    )
}