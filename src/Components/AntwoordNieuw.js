import React, { useState } from "react";
import axios from "axios";

//unfinished
export default function AntwoordNieuw() {
  const [geselecteerdeAntwoord, setGeselecteerdeAntwoord] = useState(null);
  const handleSubmit = () => {
    const antwoordData = {
      id: 0,
      reactie: reactieTest,
      vraag: {
        id: vraagId,
        kwestie: "string",
      },
      feedback: {
        id: feedbackId,
        givenFeedback: "string",
        actief: true,
        zender: {
          id: 0,
          naam: "string",
          actief: true,
        },
        ontvanger: {
          id: 0,
          naam: "string",
          actief: true,
        },
      },
    };

    axios
      .post("https://localhost:7145/feedbackAPI/Antwoord/maakantwoord", antwoordData)
      .then((response) => {
        console.log(response.status, response.data);
        setStatus({ type: "success" });
        setFeedbackText("");
      })
      .catch((error) => {
        console.error(error);
        setStatus({ type: "error", error });
      });
  };
}
