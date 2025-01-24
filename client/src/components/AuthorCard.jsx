import { useNavigate } from "react-router-dom";

export function AuthorCard({ author, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card px-5 py-5 my-1 custom-max-width">
      <h2>{author.name}</h2>
      <p>{author.last_name}</p>
      <p>{author.email}</p>
      <p>{author.nationality}</p>
      <p>{author.group_name}</p>

      <div className=" card-body">
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            navigate(`/authors/${author.id}`);
          }}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(author.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
