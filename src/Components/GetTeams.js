import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetTeams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios
            .get("https://localhost:7145/feedbackAPI/team/getteams")
            .then((response) => {
                setTeams(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div className={"team-groups"}>
            {teams.length === 0 ? (
                <div>Er zijn geen teams</div>

            ) : (
                teams.map(team => (
                    <div
                        key={team.id}
                        className={`list-group-item list-group-item-action`}
                        aria-current={"true"}
                    >
                        <div className={"d-flex justify-content-between"}>
                            <h6 className={"mb-1"}>{team.naam}</h6>
                            <small>{team.id}</small>
                        </div>
                    </div>
                ))
            )}
        </div>
    );

};

