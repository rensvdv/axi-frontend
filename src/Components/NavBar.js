import { Link } from "react-router-dom";

export default function NavBar() {
  const gebruikersNaam = sessionStorage.getItem("naam");
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme={"dark"}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={""} className={"nav-link"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/teams"} className={"nav-link"}>
                  Mijn teams
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/feedback"} className={"nav-link"}>
                  Mijn feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/feedbackgeven"} className={"nav-link"}>
                  Feedback geven
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li classname="nav-item">
                <Link to={"gebruikergegevens"} className={"nav-link"}>
                  {gebruikersNaam}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
