import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetTeams({ onClick}) {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios
            .get("https://localhost:7145/feedbackAPI/Team/GetTeams")
            .then((response) => {
                setTeams(response.data);
            })
    })
};
    return (
        <div className={"team-groups"}>
            {teamoObjectenFilter.length === 0 ? (
                <div>Er zijn geen teams</div>

            ) : (
                teamoObjectenFilter.map(team => (
                    <div
                        key={team.id}
                        onClick={() => handleClick(team)}
                        className={`list-group-item list-group-item-action ${team.id === selectTeamId ? 'active' : ''}`}
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


