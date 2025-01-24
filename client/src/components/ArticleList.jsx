import { useEffect, useState } from "react";
import { getAllArticles, deleteArticle } from "../api/Article.api";
import { ArticleCard } from "./ArticleCard";
import { toast } from "react-hot-toast";

export function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const res = await getAllArticles();
      setArticles(res.data);
    }
    loadArticles();
  }, []);

  async function handleDelete(id) {
    const accepted = window.confirm("Estás seguro?");
    if (accepted) {
      await deleteArticle(id);
      toast.success("Articulo eliminado");
      setArticles(
        (prevArticles) => prevArticles.filter((article) => article.id !== id),
        console.log(articles)
      );
    }
  }
  return (
    <main className="container d-flex flex-wrap gap-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onDelete={handleDelete}
        />
      ))}
    </main>
  );
}
