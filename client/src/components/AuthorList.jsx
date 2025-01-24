import { useEffect, useState } from "react";
import { getAllAuthors, deleteAuthor } from "../api/Author.api";
import { AuthorCard } from "./AuthorCard";
import { toast } from "react-hot-toast";

export function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function loadAuthors() {
      const res = await getAllAuthors();
      setAuthors(res.data);
    }
    loadAuthors();
  }, []);

  async function handleDelete(id) {
    const accepted = window.confirm("Estás seguro?");
    if (accepted) {
      await deleteAuthor(id);
      toast.success("Autor eliminado");
      setAuthors(
        (prevAuthors) => prevAuthors.filter((author) => author.id !== id),
        console.log(authors)
      );
    }
  }
  return (
    <main className="container d-flex flex-wrap gap-3">
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} onDelete={handleDelete} />
      ))}
    </main>
  );
}
