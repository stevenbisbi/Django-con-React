import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark w-100 mb-3">
      <div className="container-fluid">
        <h3 className="navbar-brand" to="#">
          Gestor de investigacion
        </h3>

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
              <Link className="nav-link active" to="/groups">
                Crear Grupos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
