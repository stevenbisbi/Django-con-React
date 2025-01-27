import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-3 px-3">
      <div className="container-fluid">
        <h3 className="navbar-brand" to="#">
          Gestor de investigacion
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/authors-create">
                Crear Autores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/articles-create">
                Crear Articulos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/groups-create">
                Crear Grupos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
