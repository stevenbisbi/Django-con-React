import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { AuthorPage } from "./pages/AuthorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
