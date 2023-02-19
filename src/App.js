import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Friends from "./pages/Friends";
import "./index.css";
import HangoutPlaces from "./pages/HangoutPlaces";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Friends />} />
          <Route path="/hangoutplaces" element={<HangoutPlaces />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
