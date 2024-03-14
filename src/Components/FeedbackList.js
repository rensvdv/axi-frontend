import React from "react";
import axios from "axios";

export default function FeedbackList() {

    const handleSubmit = () => {
        axios.get("https://localhost:7145/WeatherForecast")
            .then(response => {
                // handle success
                console.log(response.data);
            })
            .catch(error => {
                // handle error
                console.error(error);
            });
    }

    return(
        <>
            <button className={"btn btn-primary mt-2"} onClick={handleSubmit}>Test :)</button>
        </>
    )
}