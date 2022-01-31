import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndividualNews from "./pages/IndividualNews";

function App() {
  return (
    <Routes>
      <Route path="/" caseSensitive element={<Home />} />
      <Route path="news" element={<IndividualNews />} />
    </Routes>
  );
}

export default App;
