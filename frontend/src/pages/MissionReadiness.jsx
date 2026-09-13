import { useNavigate, useParams } from "react-router-dom";

function MissionReadiness() {

    const navigate = useNavigate();
    const { id } = useParams();

    const readiness = 91;

    return (
        <div style={styles.page}>

            <header style={styles.header}>
                <h2 style={{ margin: 0 }}>
                    ACCESSMISSION
                </h2>

                <small>
                    Mission Readiness
                </small>
            </header>

            <main style={styles.container}>

                <button
                    onClick={() =>
                        navigate(
                            `/missions/${id}/dependencies`
                        )
                    }
                    style={styles.back}
                >
                    ← Dependencies
                </button>


                <div style={styles.card}>

                    <p style={styles.muted}>
                        Mission #{id}
                    </p>

                    <h1>
                        Mission Readiness
                    </h1>

                    <div style={styles.score}>
                        {readiness}%
                    </div>

                    <h2>
                        Mission Ready
                    </h2>

                    <p style={styles.muted}>
                        The current accessibility information
                        indicates that this mission can be
                        completed using the identified accessible
                        dependencies.
                    </p>

                </div>


                <div style={styles.card}>

                    <h2>Readiness Checks</h2>

                    <div style={styles.check}>
                        <span>✓</span>
                        Accessible entrance available
                    </div>

                    <div style={styles.check}>
                        <span>✓</span>
                        Ramp A available
                    </div>

                    <div style={styles.check}>
                        <span>✓</span>
                        Elevator 2 available
                    </div>

                    <div style={styles.check}>
                        <span>✓</span>
                        Accessible corridor available
                    </div>

                    <div style={styles.check}>
                        <span>✓</span>
                        Room 204 available
                    </div>

                </div>


                <div style={styles.warning}>

                    <h3>
                        ⚠ Critical Dependency
                    </h3>

                    <p>
                        Elevator 2 is currently required
                        for this mission because the user
                        cannot use stairs.
                    </p>

                </div>


                <button
                    onClick={() =>
                        navigate(
                            `/missions/${id}/live`
                        )
                    }
                    style={styles.button}
                >
                    Start Mission →
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

    back: {
        background: "none",
        border: "none",
        cursor: "pointer",
        marginBottom: "20px"
    },

    score: {
        fontSize: "64px",
        fontWeight: "bold",
        marginTop: "20px"
    },

    check: {
        padding: "15px",
        borderBottom: "1px solid #eee",
        fontSize: "16px"
    },

    warning: {
        background: "#fff7ed",
        border: "1px solid #fed7aa",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "20px"
    },

    button: {
        width: "100%",
        padding: "16px",
        background: "#111827",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default MissionReadiness;