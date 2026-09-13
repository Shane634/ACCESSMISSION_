import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f5f7fb",
                fontFamily: "Arial, sans-serif"
            }}
        >

            {/* NAVBAR */}

            <nav
                style={{
                    background: "#ffffff",
                    borderBottom: "1px solid #e5e7eb",
                    padding: "16px 40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px"
                }}
            >
                <div>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: "24px"
                        }}
                    >
                        ACCESSMISSION
                    </h2>

                    <small
                        style={{
                            color: "#64748b"
                        }}
                    >
                        Don't just reach the destination. Complete the mission.
                    </small>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px"
                    }}
                >
                    <button
                        onClick={() => navigate("/profile")}
                        style={navButtonStyle}
                    >
                        Profile
                    </button>

                    <button
                        onClick={handleLogout}
                        style={navButtonStyle}
                    >
                        Logout
                    </button>
                </div>
            </nav>


            {/* MAIN */}

            <main
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "40px 25px"
                }}
            >

                {/* WELCOME */}

                <section
                    style={{
                        marginBottom: "30px"
                    }}
                >
                    <p
                        style={{
                            color: "#64748b",
                            marginBottom: "8px"
                        }}
                    >
                        Welcome back
                    </p>

                    <h1
                        style={{
                            margin: "0 0 10px 0",
                            fontSize: "36px"
                        }}
                    >
                        {user?.name || "User"}
                    </h1>

                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "17px"
                        }}
                    >
                        Ready to complete your next mission?
                    </p>
                </section>


                {/* CREATE MISSION */}

                <section
                    style={{
                        background: "#111827",
                        color: "#ffffff",
                        borderRadius: "18px",
                        padding: "35px",
                        marginBottom: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "25px",
                        flexWrap: "wrap"
                    }}
                >
                    <div>
                        <h2
                            style={{
                                marginTop: 0,
                                fontSize: "28px"
                            }}
                        >
                            What do you need to accomplish?
                        </h2>

                        <p
                            style={{
                                color: "#cbd5e1",
                                maxWidth: "650px",
                                lineHeight: "1.6"
                            }}
                        >
                            ACCESSMISSION will break your goal
                            into steps, identify accessibility
                            dependencies and check whether you
                            are actually ready to complete it.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/missions/create")}
                        style={{
                            background: "#ffffff",
                            color: "#111827",
                            border: "none",
                            borderRadius: "10px",
                            padding: "15px 22px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        + Create Mission
                    </button>
                </section>


                {/* STATUS CARDS */}

                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "20px",
                        marginBottom: "30px"
                    }}
                >

                    <StatusCard
                        title="Accessibility Profile"
                        value="Configured"
                        status="Ready"
                        onClick={() => navigate("/onboarding")}
                    />

                    <StatusCard
                        title="Mission Readiness"
                        value="Not calculated"
                        status="Create a mission"
                    />

                    <StatusCard
                        title="Active Mission"
                        value="None"
                        status="No mission running"
                    />

                    <StatusCard
                        title="Completed Missions"
                        value="0"
                        status="Start your first mission"
                    />

                </section>


                {/* CURRENT MISSION */}

                <section
                    style={{
                        background: "#ffffff",
                        borderRadius: "16px",
                        padding: "25px",
                        marginBottom: "30px",
                        border: "1px solid #e5e7eb"
                    }}
                >
                    <h2>
                        Current Mission
                    </h2>

                    <p
                        style={{
                            color: "#64748b"
                        }}
                    >
                        You don't have an active mission yet.
                    </p>

                    <button
                        onClick={() => navigate("/missions/create")}
                        style={{
                            padding: "11px 18px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#111827",
                            color: "#ffffff",
                            cursor: "pointer"
                        }}
                    >
                        Create Your First Mission
                    </button>
                </section>


                {/* TWO COLUMNS */}

                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px"
                    }}
                >

                    {/* HOW IT WORKS */}

                    <div
                        style={cardStyle}
                    >
                        <h2>
                            How ACCESSMISSION Works
                        </h2>

                        <Step
                            number="1"
                            text="Tell us what you need to accomplish."
                        />

                        <Step
                            number="2"
                            text="AI breaks your mission into steps."
                        />

                        <Step
                            number="3"
                            text="Critical accessibility dependencies are identified."
                        />

                        <Step
                            number="4"
                            text="Your mission readiness is calculated."
                        />

                        <Step
                            number="5"
                            text="You receive a personalized route."
                        />
                    </div>


                    {/* ACCESSIBILITY STATUS */}

                    <div
                        style={cardStyle}
                    >
                        <h2>
                            Accessibility Status
                        </h2>

                        <StatusRow
                            text="Personal accessibility profile"
                            status="Configured"
                        />

                        <StatusRow
                            text="Navigation preferences"
                            status="Configured"
                        />

                        <StatusRow
                            text="Current mission"
                            status="Not created"
                        />

                        <button
                            onClick={() => navigate("/onboarding")}
                            style={{
                                marginTop: "20px",
                                width: "100%",
                                padding: "12px",
                                borderRadius: "9px",
                                border: "1px solid #d1d5db",
                                background: "#ffffff",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            Update Accessibility Profile
                        </button>
                    </div>

                </section>

            </main>
        </div>
    );
}


/* STATUS CARD */

function StatusCard({
    title,
    value,
    status,
    onClick
}) {
    return (
        <div
            onClick={onClick}
            style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "22px",
                cursor: onClick
                    ? "pointer"
                    : "default"
            }}
        >
            <p
                style={{
                    margin: 0,
                    color: "#64748b"
                }}
            >
                {title}
            </p>

            <h3
                style={{
                    margin: "10px 0"
                }}
            >
                {value}
            </h3>

            <small
                style={{
                    color: "#64748b"
                }}
            >
                {status}
            </small>
        </div>
    );
}


/* STEP */

function Step({
    number,
    text
}) {
    return (
        <div
            style={{
                display: "flex",
                gap: "12px",
                marginBottom: "16px",
                lineHeight: "1.5"
            }}
        >
            <strong>
                {number}.
            </strong>

            <span>
                {text}
            </span>
        </div>
    );
}


/* STATUS ROW */

function StatusRow({
    text,
    status
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                padding: "15px 0",
                borderBottom: "1px solid #f1f5f9"
            }}
        >
            <span>
                {text}
            </span>

            <small>
                {status}
            </small>
        </div>
    );
}


/* STYLES */

const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "25px"
};

const navButtonStyle = {
    padding: "9px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    background: "#ffffff",
    cursor: "pointer"
};

export default Home;