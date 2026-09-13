import { useNavigate, useParams } from "react-router-dom";

function MissionRecovery() {

    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div style={styles.page}>

            <header style={styles.header}>
                <h2 style={{ margin: 0 }}>
                    ACCESSMISSION
                </h2>

                <small>
                    Mission Recovery Engine
                </small>
            </header>


            <main style={styles.container}>

                <div style={styles.alert}>

                    <h1>
                        🚨 Mission At Risk
                    </h1>

                    <p>
                        Elevator 2, a critical dependency,
                        is currently unavailable.
                    </p>

                </div>


                <div style={styles.card}>

                    <h2>
                        Recovery Options
                    </h2>

                    <div style={styles.option}>

                        <h3>
                            🛗 Alternative Elevator
                        </h3>

                        <p>
                            Use Elevator 3 from the
                            alternative accessible entrance.
                        </p>

                        <span style={styles.recommended}>
                            RECOMMENDED
                        </span>

                    </div>


                    <div style={styles.option}>

                        <h3>
                            👨‍💼 Request Assistance
                        </h3>

                        <p>
                            Request accessibility assistance
                            from campus staff.
                        </p>

                    </div>


                    <div style={styles.option}>

                        <h3>
                            🔄 Change Route
                        </h3>

                        <p>
                            ACCESSMISSION can generate an
                            alternative accessible route.
                        </p>

                    </div>

                </div>


                <button
                    onClick={() =>
                        navigate(
                            `/missions/${id}/complete`
                        )
                    }
                    style={styles.button}
                >
                    Use Alternative Route →
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
        padding: "40px 20px"
    },

    alert: {
        background: "#fef2f2",
        border: "2px solid #ef4444",
        padding: "30px",
        borderRadius: "16px",
        marginBottom: "20px"
    },

    card: {
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        border: "1px solid #ddd",
        marginBottom: "20px"
    },

    option: {
        border: "1px solid #e5e7eb",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "15px"
    },

    recommended: {
        background: "#dcfce7",
        color: "#166534",
        padding: "6px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold"
    },

    button: {
        width: "100%",
        padding: "16px",
        border: "none",
        borderRadius: "10px",
        background: "#111827",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

export default MissionRecovery;