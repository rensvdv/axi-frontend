import './App.css';
import FeedbackList from "./Components/FeedbackList";
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar";
import MijnFeedback from "./Pages/MijnFeedback";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/feedback" element={<MijnFeedback />} />
            <Route path="/teams" element={<FeedbackList />} />
            <Route path="/feedbackgeven" element={<FeedbackList />} />
        </Routes>
    </div>
  );
}

export default App;
