import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar__title">Watchdog</h1>
            <ul className="nav__list">
                <li className="nav__list--item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="nav__list--item">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}