import { useNavigate } from "react-router-dom";
import { deleteAuthor } from "../api/Author.api";
import { toast } from "react-hot-toast";

export function AuthorCard({ author }) {
  const navigate = useNavigate();

  return (
    <div className="card px-5 py-5 my-1">
      <h2>{author.name}</h2>
      <p>{author.last_name}</p>
      <p>{author.email}</p>
      <p>{author.nationality}</p>
      <p>{author.group_name}</p>

      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate(`/authors/${author.id}`);
          }}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={async () => {
            const accepted = window.confirm("Estás seguro?");
            if (accepted) {
              await deleteAuthor(author.id);
              toast.success("Autor eliminado");
              //navigate("/authors");
              window.location.reload();
            }
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
