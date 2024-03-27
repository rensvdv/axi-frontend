import './App.css';
import FeedbackList from "./Components/FeedbackList";
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/mijnfeedback" element={<FeedbackList />} />
            <Route path="/mijnteams" element={<FeedbackList />} />
            <Route path="/feedbackgeven" element={<FeedbackList />} />
        </Routes>
    </div>
  );
}

export default App;
