import React, {useState} from "react";
import AlleTeamledenLijst from "../Components/AlleTeamledenLijst";
import FeedbackInvullenOverEenTeamlid from "../Components/FeedbackInvullenOverEenTeamlid";


export default function FeedbackGeven() {
    const [geselecteerdTeamlid, setGeselecteerdTeamlid] = useState(null);

    const handleClick = (teamlid) => {
        //Bij het aanklikken van een teamlid wordt de usestate geupdate naar het aangeklikte teamlid
        setGeselecteerdTeamlid(teamlid);
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-1"}></div>
                <div className={"col-4 gy-2"}>
                    {/*De onclick wordt als property meegegeven aan AlleTeamledenLijst */}
                    <AlleTeamledenLijst onClick={handleClick} />
                </div>
                <div className={"col-1"}></div>
                <div className={"col-6 gy-2"} style={{height: "90vh"}}>
                    <div className={"h-100"}>
                        {/*Het geselecteerde teamlid vanuit AlleTeamledenLijst wordt meegegeven als property */}
                        <FeedbackInvullenOverEenTeamlid geselecteerdTeamlid={geselecteerdTeamlid}/>
                    </div>
                </div>
            </div>
        </div>
    )
}