import React, { useState } from 'react';
import RechtenLijst from "../Components/RechtenLijst";
import ProfielAanmaken from "../Components/ProfielAanmaken";

export default function Profielen() {
    const [geselecteerdeRechten, setGeselecteerdeRechten] = useState([]);

    const handleSelect = (recht) => {
        if (!geselecteerdeRechten.find(geselecteerdeRecht => geselecteerdeRecht.id === recht.id)) {
            setGeselecteerdeRechten(aangeKlikteRechten => [...aangeKlikteRechten, recht]);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h5>Rechten:</h5>
                    <RechtenLijst onSelect={handleSelect}/>
                </div>
                <div className="col-6">
                    <h5>Geselecteerde Rechten:</h5>
                    <ProfielAanmaken geselecteerdeRechten={geselecteerdeRechten}/>
                </div>
            </div>
        </div>
    );
}
