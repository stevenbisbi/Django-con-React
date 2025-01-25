import { Link, useNavigate } from "react-router-dom";

export function ArticleCard({ article, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card px-5 py-5 my-1 custom-max-width">
      <h2> {article.title} </h2>
      <p>
        {" "}
        <span className="fw-bold">Fecha de publicación: </span>
        {article.publication_date}
      </p>
      <Link
        to={`authors/${article.id_author}`}
        className="text-decoration-none text-reset"
      >
        {" "}
        <span className="fw-bold ">Autor: </span>
        {article.author_name}
      </Link>
      <p>
        <span className="fw-bold">Tipo de articulo: </span>
        {article.tipo_name}
      </p>

      <div className=" card-body">
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            navigate(`/articles/${article.id}`);
          }}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(article.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
