import React, { useState } from 'react';
import EenFeedbackObjectZien from "../Components/EenFeedbackObjectZien";
import MijnFeedbackLijst from "../Components/MijnFeedbackLijst";

export default function MijnFeedback() {
    const [geselecteerdeFeedback, setGeselecteerdeFeedback] = useState(null);

    const handleClick = (feedback) => {
        //Bij het aanklikken van een object wordt de usestate geupdate naar het geklikte object
        setGeselecteerdeFeedback(feedback);
    };

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-1"}></div>
                <div className={"col-4 gy-2"}>
                    {/*De onclick wordt als property meegegeven aan MijnFeedbackLijst */}
                    <MijnFeedbackLijst onClick={handleClick} />
                </div>
                <div className={"col-1"}></div>
                <div className={"col-6 gy-2"} style={{height: "90vh"}}>
                    <div className={"h-100"}>
                        {/*Het geselecteerde object vanuit MijnFeedbackLijst wordt meegegeven als property */}
                        <EenFeedbackObjectZien geselecteerdeFeedback={geselecteerdeFeedback} />
                    </div>
                </div>
            </div>
        </div>
    )
}
