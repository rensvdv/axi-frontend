import './App.css';
import ApiCallTest from "./Components/ApiCallTest";
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar";
import MijnFeedback from "./Pages/MijnFeedback";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Routes>
            <Route path="/feedback" element={<MijnFeedback />} />
            <Route path="/teams" element={<ApiCallTest />} />
            <Route path="/feedbackgeven" element={<ApiCallTest />} />
        </Routes>
    </div>
  );
}

export default App;
