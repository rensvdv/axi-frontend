import React, {useState} from 'react';
import axios from "axios";

export default function ProfielAanmaken({ geselecteerdeRechten }) {

    const [profielNaam, setProfielNaam] = useState('');
    const [status, setStatus] = useState(undefined);

    const handlePost = () => {
        const profielData = {
            profielNaam: profielNaam,
            rechten: geselecteerdeRechten,
        };
        console.log(profielData);
        axios.post('https://localhost:7145/feedbackapi/profiel/maakprofiel', profielData)
            .then(response => {
                setStatus({ type: "success" });
                console.log('Profiel aangemaakt', response.data);
                setProfielNaam("");
            })
            .catch(error => {
                setStatus({ type: "error" });
                console.error('Er is een fout opgetreden', error);
            });
    };

    if(geselecteerdeRechten.length === 0 ) {
        return (
            <div>
                Er zijn nog geen rechten geselecteerd
            </div>
        )
    }

    return (
        <div className={"text-start"}>
            <div className="list-group">
                {geselecteerdeRechten.map(recht => (
                    <div className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex justify-content-between">
                            <h5 className="mb-1">{recht.rechtNaam}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            <label className={"form-label"}>Geef het profiel een naam</label>
            <input
                type="text"
                value={profielNaam}
                className="form-control"
                onChange={(e) => setProfielNaam(e.target.value)}
                placeholder="Voer een profielnaam in"
            /> <br/>
            <button className={"btn btn-primary"} onClick={handlePost}>Opslaan</button>

            <br /> < br />
            {status?.type === "success" && (
                <div className="alert alert-success" role="alert">
                    Profiel opgeslagen!
                </div>
            )}
            {status?.type === "error" && (
                <div className="alert alert-danger" role="alert">
                    Er is een fout opgetreden
                </div>
            )}
        </div>
    );
}
