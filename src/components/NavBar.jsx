import { NavLink } from "react-router"

// Reusable class function - NavLink passes in { isActive } automatically
const navLinkClass = ({ isActive }) => "nav-link text-white" + (isActive ? " fw-bold text-warning" : "")

export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white text-decoration-none" to="/">🐱 Cat Facts</NavLink>
                {/* d-flex and gap-3 keeps the links left aligned with some space between them */}
                <div className="d-flex gap-3">
                    <NavLink className={navLinkClass} to="/">Facts</NavLink>
                    <NavLink className={navLinkClass} to="/favourites">Favourites</NavLink>
                </div>
            </div>
        </nav>
    )
}