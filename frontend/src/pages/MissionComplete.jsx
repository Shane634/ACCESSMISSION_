import { useNavigate, useParams } from "react-router-dom";

function MissionComplete() {

    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div style={styles.page}>

            <div style={styles.card}>

                <div style={styles.icon}>
                    ✓
                </div>

                <h1>
                    Mission Completed
                </h1>

                <p style={styles.muted}>
                    Mission #{id} was successfully completed.
                </p>

                <div style={styles.summary}>

                    <p>
                        <strong>Mission:</strong>
                        Attend my exam
                    </p>

                    <p>
                        <strong>Destination:</strong>
                        Block C, Room 204
                    </p>

                    <p>
                        <strong>Recovery:</strong>
                        Alternative accessible route used
                    </p>

                    <p>
                        <strong>Status:</strong>
                        COMPLETED
                    </p>

                </div>

                <button
                    onClick={() =>
                        navigate("/home")
                    }
                    style={styles.button}
                >
                    Return to Dashboard
                </button>

            </div>

        </div>
    );
}


const styles = {
    page: {
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif"
    },

    card: {
        background: "white",
        width: "90%",
        maxWidth: "600px",
        padding: "50px",
        textAlign: "center",
        borderRadius: "20px",
        border: "1px solid #ddd"
    },

    icon: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "#dcfce7",
        color: "#166534",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        fontSize: "45px",
        fontWeight: "bold"
    },

    muted: {
        color: "#64748b"
    },

    summary: {
        textAlign: "left",
        background: "#f8fafc",
        padding: "20px",
        borderRadius: "12px",
        margin: "25px 0"
    },

    button: {
        width: "100%",
        padding: "16px",
        background: "#111827",
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

export default MissionComplete;