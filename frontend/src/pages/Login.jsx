import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (data.success) {
                login(data.user, data.token);

                setMessage("Login successful!");

                navigate("/onboarding");
            } else {
                setMessage(
                    data.message || "Login failed."
                );
            }
        } catch (error) {
            console.error("Login error:", error);

            setMessage(
                "Could not connect to the backend. Make sure the backend is running."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: "450px",
                margin: "60px auto",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "12px"
            }}
        >
            <h1>ACCESSMISSION</h1>

            <h2>Login</h2>

            <p>
                Login to continue your accessibility mission.
            </p>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>
                        Email
                    </label>

                    <br />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            boxSizing: "border-box"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>
                        Password
                    </label>

                    <br />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            boxSizing: "border-box"
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        cursor: "pointer"
                    }}
                >
                    {loading
                        ? "Logging in..."
                        : "Login"}
                </button>
            </form>

            {message && (
                <p style={{ marginTop: "15px" }}>
                    {message}
                </p>
            )}

            <p style={{ marginTop: "20px" }}>
                Don't have an account?
            </p>

            <button
                onClick={() => navigate("/register")}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
            >
                Create Account
            </button>
        </div>
    );
}

export default Login;