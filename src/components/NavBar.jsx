import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavBar = () => {
    const location = useLocation()
        return(
            <>
                <Nav className="navbar navbar-expand-lg navbar-dark" style= {{backgroundColor: "#221f1f"}}>
        <a className="navbar-brand" href="#top">
          <img src="assets/logo.png" style= {{width: "100px", height: "55px"}} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                Home
              {/* <a className="nav-link font-weight-bold" href="#top"
                >Home <span className="sr-only">(current)</span></a> */}
            </Link>

            <Link className={`nav-link ${location.pathname === "/TvShow" ? "active" : ""}`} to="/TvShow">
              TV Show
            </Link>

            {/* <Link className="nav-item">
              <a className="nav-link font-weight-bold" href="#top">Movies</a>
            </Link>
            
            <Link className="nav-item">
              <a className="nav-link font-weight-bold" href="#top">Recently Added</a>
            </Link>
            
            <Link className="nav-item">
              <a className="nav-link font-weight-bold" href="#top">My link</a>
            </Link> */}
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
        </div>
      </Nav>
            </>
        )
    }


export default NavBar