import React from "react";
import MijnFeedbackLijst from "../Components/MijnFeedbackLijst";
import EenFeedbackObjectZien from "../Components/EenFeedbackObjectZien";

export default function MijnFeedback() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-1"}></div>
                <div className={"col-4 gy-2"}>
                    <MijnFeedbackLijst />
                </div>
                <div className={"col-1"}></div>
                <div className={"col-6 gy-2"} style={{height: "90vh"}}>
                    <div className={"h-100"}>
                        <EenFeedbackObjectZien />
                    </div>
                </div>
            </div>
        </div>
    )
}