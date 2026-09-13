import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMission() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        institution: "ACCESSMISSION College Campus",
        date: "",
        time: "",
        urgency: "NORMAL"
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("Creating your mission...");

    try {
        const token = localStorage.getItem("token");

        if (!token) {
            setMessage(
                "You are not logged in. Please login first."
            );

            return;
        }

        const response = await fetch(
            "http://localhost:5000/api/missions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },

                body: JSON.stringify({
                    title: formData.title,
                    description: formData.description,
                    institutionId: 1,
                    missionType: "GENERAL"
                })
            }
        );

        const data = await response.json();

        if (data.success) {
            setMessage(
                "Mission created successfully!"
            );

            console.log(
                "Created mission:",
                data.mission
            );

            setTimeout(() => {
                navigate(`/missions/${data.mission.id}`);
            }, 1000);
        } else {
            setMessage(
                data.message ||
                "Could not create mission."
            );
        }

    } catch (error) {
        console.error(
            "Mission creation error:",
            error
        );

        setMessage(
            "Could not connect to the backend."
        );
    }
};

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
                    borderBottom: "1px solid #e5e7eb",
                    padding: "18px 40px"
                }}
            >
                <h2 style={{ margin: 0 }}>
                    ACCESSMISSION
                </h2>

                <small style={{ color: "#64748b" }}>
                    Create a Mission
                </small>
            </header>


            {/* CONTENT */}

            <main
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "40px 25px"
                }}
            >

                <button
                    onClick={() => navigate("/home")}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0",
                        marginBottom: "20px",
                        fontSize: "15px"
                    }}
                >
                    ← Back to Dashboard
                </button>


                <div
                    style={{
                        background: "#ffffff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "18px",
                        padding: "35px"
                    }}
                >

                    <h1>
                        Create a New Mission
                    </h1>

                    <p
                        style={{
                            color: "#64748b",
                            lineHeight: "1.6"
                        }}
                    >
                        Tell ACCESSMISSION what you need to
                        accomplish. We will break your mission
                        into manageable steps and check the
                        accessibility requirements.
                    </p>


                    <form onSubmit={handleSubmit}>

                        {/* TITLE */}

                        <div style={fieldStyle}>
                            <label>
                                <strong>
                                    Mission Title
                                </strong>
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Example: Attend my exam"
                                required
                                style={inputStyle}
                            />
                        </div>


                        {/* DESCRIPTION */}

                        <div style={fieldStyle}>
                            <label>
                                <strong>
                                    What do you need to accomplish?
                                </strong>
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Example: I need to attend my exam in Block C, Room 204."
                                rows="6"
                                required
                                style={{
                                    ...inputStyle,
                                    resize: "vertical"
                                }}
                            />

                            <small
                                style={{
                                    color: "#64748b"
                                }}
                            >
                                Be as specific as possible.
                                ACCESSMISSION will use this
                                information to understand your
                                mission.
                            </small>
                        </div>


                        {/* INSTITUTION */}

                        <div style={fieldStyle}>
                            <label>
                                <strong>
                                    Institution
                                </strong>
                            </label>

                            <select
                                name="institution"
                                value={formData.institution}
                                onChange={handleChange}
                                style={inputStyle}
                            >
                                <option>
                                    ACCESSMISSION College Campus
                                </option>

                                <option>
                                    Other Institution
                                </option>
                            </select>
                        </div>


                        {/* DATE */}

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "1fr 1fr",
                                gap: "20px",
                                marginBottom: "25px"
                            }}
                        >

                            <div>
                                <label>
                                    <strong>
                                        Mission Date
                                    </strong>
                                </label>

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </div>


                            <div>
                                <label>
                                    <strong>
                                        Mission Time
                                    </strong>
                                </label>

                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </div>

                        </div>


                        {/* URGENCY */}

                        <div style={fieldStyle}>
                            <label>
                                <strong>
                                    Mission Urgency
                                </strong>
                            </label>

                            <select
                                name="urgency"
                                value={formData.urgency}
                                onChange={handleChange}
                                style={inputStyle}
                            >
                                <option value="LOW">
                                    Low
                                </option>

                                <option value="NORMAL">
                                    Normal
                                </option>

                                <option value="HIGH">
                                    High
                                </option>

                                <option value="CRITICAL">
                                    Critical
                                </option>
                            </select>
                        </div>


                        {/* ACCESSIBILITY */}

                        <div
                            style={{
                                background: "#f8fafc",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                padding: "20px",
                                marginBottom: "25px"
                            }}
                        >
                            <h3>
                                Accessibility Planning
                            </h3>

                            <p
                                style={{
                                    color: "#64748b",
                                    lineHeight: "1.5"
                                }}
                            >
                                ACCESSMISSION will automatically
                                use your saved accessibility profile
                                when analysing this mission.
                            </p>

                            <p>
                                ✓ Your accessibility needs will be
                                considered
                            </p>

                            <p>
                                ✓ Critical dependencies will be
                                identified
                            </p>

                            <p>
                                ✓ Your route will be personalized
                            </p>
                        </div>


                        {/* SUBMIT */}

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "15px",
                                background: "#111827",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "10px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}
                        >
                            Analyze My Mission →
                        </button>

                    </form>


                    {/* MESSAGE */}

                    {message && (
                        <p
                            style={{
                                marginTop: "20px",
                                fontWeight: "bold"
                            }}
                        >
                            {message}
                        </p>
                    )}

                </div>

            </main>
        </div>
    );
}


const fieldStyle = {
    marginBottom: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
};

const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box"
};

export default CreateMission;