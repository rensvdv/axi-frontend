import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MijnFeedback from "./Pages/MijnFeedback";
import FeedbackGeven from "./Pages/FeedbackGeven";
import MijnTeams from "./Pages/MijnTeams";
import Gebruikers from "./Pages/Gebruikers";
import Profielen from "./Pages/Profielen";
import LijstVragen from "./Pages/LijstVragen";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/feedback" element={<MijnFeedback />} />
        <Route path="/teams" element={<MijnTeams />} />
        <Route path="" element={<FeedbackGeven />} />
        <Route path="/gebruikers" element={<Gebruikers />} />
        <Route path="/profielen" element={<Profielen />} />
        <Route path="/lijst" element={<LijstVragen />} />
      </Routes>
    </div>
  );
}

export default App;
