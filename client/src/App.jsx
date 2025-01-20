import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticleFormPage } from "./pages/Forms/ArticleFormPage";
import { GroupPage } from "./pages/GroupPage";
import { GroupFormPage } from "./pages/Forms/GroupFormPage";
import { AuthorPage } from "./pages/AuthorPage";
import { AuthorFormPage } from "./pages/Forms/AuthorFormPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<AuthorPage />} />
        <Route path="/authors-create" element={<AuthorFormPage />} />
        <Route path="/authors/:id" element={<AuthorFormPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/articles-create" element={<ArticleFormPage />} />
        <Route path="/articles/:id" element={<ArticleFormPage />} />
        <Route path="/groups" element={<GroupPage />} />
        <Route path="/groups-create" element={<GroupFormPage />} />
        <Route path="/groups/:id" element={<GroupFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
