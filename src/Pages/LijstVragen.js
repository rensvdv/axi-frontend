import React, { useState } from "react";
import GetLijsten from "../Components/GetLijsten";
import GetVragen from "../Components/GetVragen";

export default function MijnFeedback() {
  const [geselecteerdeLijst, setGeselecteerdeLijst] = useState(null);

  const handleClick = (lijst) => {
    //Bij het aanklikken van een object wordt de usestate geupdate naar het geklikte object
    setGeselecteerdeLijst(lijst);
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-1"}></div>
        <div className={"col-3 gy-2"}>
          <GetLijsten TeamId={1} onClick={(lijst) => handleClick(lijst.id)} />
        </div>
        <div className={"col-3 gy-2"}>
          <GetVragen LijstId={geselecteerdeLijst} />
        </div>
      </div>
    </div>
  );
}
