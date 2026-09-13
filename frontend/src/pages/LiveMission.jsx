import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function LiveMission() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [elevatorAvailable, setElevatorAvailable] =
        useState(true);

    const simulateFailure = () => {
        setElevatorAvailable(false);
    };

    return (
        <div style={styles.page}>

            <header style={styles.header}>
                <div>
                    <h2 style={{ margin: 0 }}>
                        ACCESSMISSION
                    </h2>

                    <small>
                        Live Mission
                    </small>
                </div>
            </header>


            <main style={styles.container}>

                <div style={styles.card}>

                    <p style={styles.muted}>
                        Mission #{id}
                    </p>

                    <h1>
                        Mission In Progress
                    </h1>

                    <p style={styles.muted}>
                        Attend my exam in Block C,
                        Room 204.
                    </p>

                </div>


                <div style={styles.card}>

                    <h2>
                        Current Progress
                    </h2>

                    <div style={styles.progress}>
                        <div style={styles.progressFill} />
                    </div>

                    <p>
                        Step 3 of 5
                    </p>

                    <h2>
                        Reach Floor 2
                    </h2>

                    <p style={styles.muted}>
                        Use Elevator 2 to reach Floor 2.
                    </p>

                </div>


                <div
                    style={
                        elevatorAvailable
                            ? styles.success
                            : styles.danger
                    }
                >

                    <h2>
                        {elevatorAvailable
                            ? "🛗 Elevator 2 Available"
                            : "🚨 Elevator 2 Unavailable"}
                    </h2>

                    <p>
                        {elevatorAvailable
                            ? "Your critical dependency is currently operational."
                            : "Your critical dependency has failed. Mission recovery is required."
                        }
                    </p>

                </div>


                {elevatorAvailable ? (

                    <button
                        onClick={simulateFailure}
                        style={styles.warningButton}
                    >
                        Simulate Elevator Failure
                    </button>

                ) : (

                    <button
                        onClick={() =>
                            navigate(
                                `/missions/${id}/recovery`
                            )
                        }
                        style={styles.dangerButton}
                    >
                        Start Mission Recovery →
                    </button>

                )}

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
        background: "white",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd"
    },

    container: {
        maxWidth: "800px",
        margin: "auto",
        padding: "35px 20px"
    },

    card: {
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        marginBottom: "20px"
    },

    muted: {
        color: "#64748b",
        lineHeight: "1.6"
    },

    progress: {
        width: "100%",
        height: "12px",
        background: "#e5e7eb",
        borderRadius: "10px",
        overflow: "hidden"
    },

    progressFill: {
        width: "60%",
        height: "100%",
        background: "#111827"
    },

    success: {
        background: "#ecfdf5",
        border: "1px solid #a7f3d0",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "20px"
    },

    danger: {
        background: "#fef2f2",
        border: "1px solid #fecaca",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "20px"
    },

    warningButton: {
        width: "100%",
        padding: "16px",
        border: "none",
        borderRadius: "10px",
        background: "#111827",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
    },

    dangerButton: {
        width: "100%",
        padding: "16px",
        border: "none",
        borderRadius: "10px",
        background: "#dc2626",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

export default LiveMission;