import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav>
            <h2>ACCESSMISSION</h2>

            {user && (
                <div>
                    <span>Welcome, {user.name}</span>

                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;