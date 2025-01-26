import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { GroupFormPage } from "./Forms/GroupFormPage";
import { AuthorPage } from "./pages/AuthorPage";
import { AuthorFormPage } from "./Forms/AuthorFormPage";
import { Toaster } from "react-hot-toast";
import { NavBar } from "./components/NavBar";
import { ArticleFormPage } from "./Forms/ArticleFormPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorPage />} />
        <Route path="/authors-create" element={<AuthorFormPage />} />
        <Route path="/authors/:id" element={<AuthorFormPage />} />
        <Route path="/articles-create" element={<ArticleFormPage />} />
        <Route path="/articles/:id" element={<ArticleFormPage />} />
        <Route path="/groups-create" element={<GroupFormPage />} />
        <Route path="/groups/:id" element={<GroupFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
