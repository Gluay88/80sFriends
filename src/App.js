import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FriendsList from "./pages/FriendsList";
import HangoutPlaces from "./pages/HangoutPlaces";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";
import "./index.css";
import Friends from "./pages/Friends";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<FriendsList />} />
          <Route path="/hangoutplaces" element={<HangoutPlaces />} />
          <Route path="/dictionary" element={<Dictionary />} />
          {/* add param for the url seach here.. :search */}
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
