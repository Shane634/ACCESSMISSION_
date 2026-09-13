import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MissionAnalysis() {

    const navigate = useNavigate();
    const { id } = useParams();

     const analysisStarted = useRef(false);

    const [mission, setMission] = useState(null);
    const [steps, setSteps] = useState([]);

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {

    if (analysisStarted.current) {
        return;
    }

    analysisStarted.current = true;

    analyzeMission();

    }, [id]);


    const analyzeMission = async () => {

        try {

            const token =
                localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }


            // Ask backend to analyze mission

            const response = await fetch(
                `http://localhost:5000/api/missions/${id}/analyze`,
                {
                    method: "POST",

                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


            const data = await response.json();


            if (!data.success) {

                setMessage(
                    data.message ||
                    "Could not analyze mission."
                );

                setLoading(false);

                return;
            }


            // Get the newly generated steps

            const missionResponse =
                await fetch(
                    `http://localhost:5000/api/missions/${id}`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );


            const missionData =
                await missionResponse.json();


            if (missionData.success) {

                setMission(
                    missionData.mission
                );

                setSteps(
                    missionData.steps
                );

            }


            setLoading(false);


        } catch (error) {

            console.error(
                "Mission analysis error:",
                error
            );

            setMessage(
                "Could not connect to the backend."
            );

            setLoading(false);
        }
    };


    if (loading) {

        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "#f5f7fb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Arial, sans-serif"
                }}
            >
                <div
                    style={{
                        textAlign: "center"
                    }}
                >
                    <h1>
                        Analyzing Your Mission...
                    </h1>

                    <p
                        style={{
                            color: "#64748b"
                        }}
                    >
                        ACCESSMISSION is identifying
                        the steps required to complete
                        your mission.
                    </p>
                </div>
            </div>
        );
    }


    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f5f7fb",
                fontFamily: "Arial, sans-serif"
            }}
        >

            {/* HEADER */}

            <header
                style={{
                    background: "#ffffff",
                    borderBottom:
                        "1px solid #e5e7eb",
                    padding: "18px 40px"
                }}
            >
                <h2 style={{ margin: 0 }}>
                    ACCESSMISSION
                </h2>

                <small
                    style={{
                        color: "#64748b"
                    }}
                >
                    Mission Intelligence
                </small>
            </header>


            <main
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "40px 25px"
                }}
            >

                <button
                    onClick={() =>
                        navigate("/home")
                    }
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        marginBottom: "20px",
                        fontSize: "15px"
                    }}
                >
                    ← Dashboard
                </button>


                {/* MISSION */}

                <div
                    style={{
                        background: "#ffffff",
                        border:
                            "1px solid #e5e7eb",
                        borderRadius: "18px",
                        padding: "30px",
                        marginBottom: "25px"
                    }}
                >

                    <p
                        style={{
                            color: "#64748b"
                        }}
                    >
                        Mission #{id}
                    </p>

                    <h1>
                        {mission?.title ||
                            "Mission Analysis"}
                    </h1>

                    <p
                        style={{
                            color: "#64748b",
                            lineHeight: "1.6"
                        }}
                    >
                        {mission?.description}
                    </p>


                    {/* STATUS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                            marginTop: "20px"
                        }}
                    >

                        <span
                            style={{
                                padding: "8px 14px",
                                background: "#ecfdf5",
                                color: "#047857",
                                borderRadius: "20px",
                                fontWeight: "bold"
                            }}
                        >
                            Status: {mission?.status}
                        </span>


                        <span
                            style={{
                                padding: "8px 14px",
                                background: "#eff6ff",
                                color: "#1d4ed8",
                                borderRadius: "20px",
                                fontWeight: "bold"
                            }}
                        >
                            Readiness:{" "}
                            {mission?.readiness_score}%
                        </span>

                    </div>

                </div>


                {/* STEPS */}

                <div
                    style={{
                        background: "#ffffff",
                        border:
                            "1px solid #e5e7eb",
                        borderRadius: "18px",
                        padding: "30px"
                    }}
                >

                    <h2>
                        Mission Steps
                    </h2>

                    <p
                        style={{
                            color: "#64748b"
                        }}
                    >
                        ACCESSMISSION generated these
                        steps from your mission.
                    </p>


                    {steps.length === 0 ? (

                        <p>
                            No mission steps were generated.
                        </p>

                    ) : (

                        steps.map((step) => (

                            <div
                                key={step.id}
                                style={{
                                    display: "flex",
                                    gap: "20px",
                                    padding: "20px 0",
                                    borderBottom:
                                        "1px solid #eef2f7"
                                }}
                            >

                                <div
                                    style={{
                                        minWidth: "42px",
                                        height: "42px",
                                        borderRadius: "50%",
                                        background:
                                            "#111827",
                                        color: "#ffffff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent:
                                            "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {step.step_number}
                                </div>


                                <div>

                                    <h3
                                        style={{
                                            marginTop: 0,
                                            marginBottom:
                                                "6px"
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        style={{
                                            margin: 0,
                                            color: "#64748b",
                                            lineHeight: "1.5"
                                        }}
                                    >
                                        {step.description}
                                    </p>

                                    {step.critical === 1 && (
                                        <strong>
                                            ⚠ Critical dependency
                                        </strong>
                                    )}

                                </div>

                            </div>

                        ))

                    )}


                    {/* NEXT */}

                    <button
                        onClick={() =>
                            navigate(
                                `/missions/${id}/dependencies`
                            )
                        }
                        style={{
                            width: "100%",
                            marginTop: "30px",
                            padding: "15px",
                            background:
                                "#111827",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        Check Accessibility Dependencies →
                    </button>

                </div>


                {message && (
                    <p
                        style={{
                            marginTop: "20px",
                            color: "red"
                        }}
                    >
                        {message}
                    </p>
                )}

            </main>

        </div>
    );
}

export default MissionAnalysis;