import "./menustyle.css";
import {Link} from "react-router-dom";
export default function Menu() {
    return(
        <>
            <div className="blockMenu">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>

                    <li>
                        <Link to={'/privacy'}>
                            Privacy
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </>
    )
}