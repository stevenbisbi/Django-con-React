import { useEffect, useState } from "react";
import { getAllAuthors } from "../api/Author.api";
import { AuthorCard } from "./AuthorCard";

export function AuthorList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function loadAuthors() {
      const res = await getAllAuthors();
      setAuthors(res.data);
    }
    loadAuthors();
  }, []);
  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
}
