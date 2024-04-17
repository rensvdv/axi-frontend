import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MijnFeedback from "./Pages/MijnFeedback";
import FeedbackGeven from "./Pages/FeedbackGeven";
import MijnTeams from "./Pages/MijnTeams";
import AlleGroepFeedback from "./Pages/AlleGroepFeedback";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/feedback" element={<MijnFeedback />} />
        <Route path="/teams" element={<MijnTeams />} />
        <Route path="/feedbackgeven" element={<FeedbackGeven />} />
        <Route path="/AlleGroepFeedback" element={<AlleGroepFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
