import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/register",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (data.success) {

                setMessage(
                    "Registration successful! Redirecting to login..."
                );

                setTimeout(() => {
                    navigate("/login");
                }, 1500);

            } else {

                setMessage(
                    data.message || "Registration failed."
                );

            }

        } catch (error) {

            console.error("Registration error:", error);

            setMessage(
                "Could not connect to the server. Make sure the backend is running."
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

            <h2>Create Account</h2>

            <p>
                Create your account to start using ACCESSMISSION.
            </p>

            <form onSubmit={handleSubmit}>

                <div style={{ marginBottom: "15px" }}>

                    <label>
                        Name
                    </label>

                    <br />

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
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
                        Email
                    </label>

                    <br />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
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
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        minLength="6"
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
                        ? "Creating Account..."
                        : "Create Account"}
                </button>

            </form>

            {message && (
                <p style={{ marginTop: "15px" }}>
                    {message}
                </p>
            )}

            <p style={{ marginTop: "20px" }}>
                Already have an account?
            </p>

            <button
                onClick={() => navigate("/login")}
                style={{
                    padding: "10px 20px",
                    cursor: "pointer"
                }}
            >
                Login
            </button>

        </div>
    );
}

export default Register;