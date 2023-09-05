import { Link } from "react-router-dom"
import * as userService from "../../Utilities/users-service";

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return(
        <nav>
            <Link to="/notes">My Notes</Link>
            &nbsp; | &nbsp; 
            <Link to="/notes/new">New Note</Link>
            &nbsp; | &nbsp;
            <span>Greetings {user.name}</span>
            &nbsp; | &nbsp;&nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
};

// TODO: rid navbar of nbsp