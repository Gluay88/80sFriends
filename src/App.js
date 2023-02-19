import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Friends from "./pages/Friends";
import HangoutPlaces from "./pages/HangoutPlaces";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Friends />} />
          <Route path="/hangoutplaces" element={<HangoutPlaces />} />
          <Route path="/dictionary" element={<Dictionary />} />
          {/* add param for the url seach here.. :search */}
          <Route path="/definition/:search" element={<Definition />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
