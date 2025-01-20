import { useNavigate } from "react-router-dom";

export function AuthorCard({ author }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "black",
        cursor: "pointer",
        color: "white",
        padding: "10px",
        marginBottom: "10px",
      }}
      onClick={() => {
        navigate(`/authors/${author.id}`);
      }}
    >
      <h3>{author.name}</h3>
      <p>{author.email}</p>
    </div>
  );
}
