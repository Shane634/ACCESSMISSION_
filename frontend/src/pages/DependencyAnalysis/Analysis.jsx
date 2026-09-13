import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DependencyAnalysis() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [mission, setMission] = useState(null);
    const [steps, setSteps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMission();
    }, [id]);

    const loadMission = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/missions/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();

            if (data.success) {
                setMission(data.mission);
                setSteps(data.steps);
            }

        } catch (error) {
            console.error("Dependency error:", error);
        }

        setLoading(false);
    };

    if (loading) {
        return (
            <div style={styles.center}>
                <h1>Analyzing Accessibility...</h1>
                <p>Please wait.</p>
            </div>
        );
    }

    return (
        <div style={styles.page}>

            <header style={styles.header}>
                <div>
                    <h2 style={{ margin: 0 }}>
                        ACCESSMISSION
                    </h2>

                    <small>
                        Accessibility Dependency Engine
                    </small>
                </div>
            </header>

            <main style={styles.container}>

                <button
                    onClick={() =>
                        navigate(`/missions/${id}`)
                    }
                    style={styles.backButton}
                >
                    ← Mission Analysis
                </button>

                <div style={styles.card}>

                    <p style={styles.muted}>
                        Mission #{id}
                    </p>

                    <h1>
                        Accessibility Dependency Analysis
                    </h1>

                    <p style={styles.muted}>
                        ACCESSMISSION is checking which
                        facilities are essential for this
                        specific user to complete the mission.
                    </p>

                </div>


                <div style={styles.card}>

                    <h2>User Requirements</h2>

                    <div style={styles.requirement}>
                        ♿ Cannot use stairs
                    </div>

                    <div style={styles.requirement}>
                        🛗 Prefer elevator
                    </div>

                    <div style={styles.requirement}>
                        ♿ Accessible route required
                    </div>

                    <div style={styles.requirement}>
                        🛣 Prefer ramps
                    </div>

                </div>


                <div style={styles.card}>

                    <h2>Mission Dependencies</h2>

                    <div style={styles.dependency}>

                        <div style={styles.icon}>
                            🛗
                        </div>

                        <div style={{ flex: 1 }}>

                            <h3 style={{ margin: 0 }}>
                                Elevator 2
                            </h3>

                            <p style={styles.muted}>
                                Required to reach Floor 2
                                without using stairs.
                            </p>

                            <span style={styles.critical}>
                                🔴 CRITICAL DEPENDENCY
                            </span>

                        </div>

                    </div>


                    <div style={styles.dependency}>

                        <div style={styles.icon}>
                            ♿
                        </div>

                        <div style={{ flex: 1 }}>

                            <h3 style={{ margin: 0 }}>
                                Ramp A
                            </h3>

                            <p style={styles.muted}>
                                Provides accessible campus
                                entrance.
                            </p>

                            <span style={styles.required}>
                                REQUIRED
                            </span>

                        </div>

                    </div>


                    <div style={styles.dependency}>

                        <div style={styles.icon}>
                            🚪
                        </div>

                        <div style={{ flex: 1 }}>

                            <h3 style={{ margin: 0 }}>
                                Accessible Corridor
                            </h3>

                            <p style={styles.muted}>
                                Provides wheelchair access
                                to Room 204.
                            </p>

                            <span style={styles.required}>
                                REQUIRED
                            </span>

                        </div>

                    </div>

                </div>


                <div style={styles.card}>

                    <h2>Dependency Graph</h2>

                    <div style={styles.graph}>

                        <div style={styles.node}>
                            Mission
                        </div>

                        <div style={styles.arrow}>
                            ↓
                        </div>

                        <div style={styles.node}>
                            Reach Floor 2
                        </div>

                        <div style={styles.arrow}>
                            ↓
                        </div>

                        <div style={styles.criticalNode}>
                            🛗 Elevator 2
                            <br />
                            CRITICAL
                        </div>

                        <div style={styles.arrow}>
                            ↓
                        </div>

                        <div style={styles.node}>
                            Room 204
                        </div>

                    </div>

                </div>


                <button
                    onClick={() =>
                        navigate(
                            `/missions/${id}/readiness`
                        )
                    }
                    style={styles.primaryButton}
                >
                    Check Mission Readiness →
                </button>

            </main>
        </div>
    );
}


const styles = {
    page: {
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif"
    },

    header: {
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        padding: "20px 40px"
    },

    container: {
        maxWidth: "900px",
        margin: "auto",
        padding: "35px 20px"
    },

    card: {
        background: "#ffffff",
        border: "1px solid #e1e5ea",
        borderRadius: "16px",
        padding: "28px",
        marginBottom: "20px"
    },

    muted: {
        color: "#64748b",
        lineHeight: "1.6"
    },

    backButton: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        marginBottom: "20px",
        fontSize: "15px"
    },

    requirement: {
        padding: "14px",
        background: "#f8fafc",
        borderRadius: "8px",
        marginBottom: "10px"
    },

    dependency: {
        display: "flex",
        gap: "18px",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        marginTop: "15px"
    },

    icon: {
        fontSize: "30px"
    },

    critical: {
        background: "#fee2e2",
        color: "#b91c1c",
        padding: "6px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold"
    },

    required: {
        background: "#fef3c7",
        color: "#92400e",
        padding: "6px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold"
    },

    graph: {
        textAlign: "center",
        padding: "20px"
    },

    node: {
        display: "inline-block",
        padding: "15px 25px",
        background: "#eef2ff",
        borderRadius: "10px",
        fontWeight: "bold"
    },

    criticalNode: {
        display: "inline-block",
        padding: "15px 25px",
        background: "#fee2e2",
        color: "#b91c1c",
        border: "2px solid #ef4444",
        borderRadius: "10px",
        fontWeight: "bold"
    },

    arrow: {
        fontSize: "25px",
        margin: "8px"
    },

    primaryButton: {
        width: "100%",
        padding: "16px",
        background: "#111827",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer"
    },

    center: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
};

export default DependencyAnalysis;