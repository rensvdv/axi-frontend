import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar";
import MijnFeedback from "./Pages/MijnFeedback";
import FeedbackGeven from "./Pages/FeedbackGeven";
import MijnTeams from "./Pages/MijnTeams";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/feedback" element={<MijnFeedback />} />
            <Route path="/teams" element={<MijnTeams />} />
            <Route path="/feedbackgeven" element={<FeedbackGeven />} />
        </Routes>
    </div>
  );
}

export default App;
