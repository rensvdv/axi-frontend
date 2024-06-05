import React, {useState} from 'react';
import axios from "axios";

export default function ProfielAanmaken({ geselecteerdeRechten }) {

    const [profielNaam, setProfielNaam] = useState('');

    const handlePost = () => {
        const profielData = {
            profielNaam: profielNaam,
            rechten: geselecteerdeRechten,
        };
        console.log(profielData);
        axios.post('https://localhost:7145/feedbackapi/profiel/maakprofiel', profielData)
            .then(response => {
                console.log('Profiel aangemaakt', response.data);
            })
            .catch(error => {
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
        <div>
            {geselecteerdeRechten.map(item => (
                <div key={item.id}>
                    <h5>{item.naam}</h5>
                </div>
            ))}
            <br/>
            <input
                type="text"
                value={profielNaam}
                onChange={(e) => setProfielNaam(e.target.value)}
                placeholder="Voer een profielnaam in"
            /> <br />
            <button className={"btn btn-primary"} onClick={handlePost}>Opslaan</button>
        </div>
    );
}
