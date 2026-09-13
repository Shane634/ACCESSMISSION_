import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        mobilityNeeds: "",
        visionNeeds: "",
        hearingNeeds: "",
        cognitiveNeeds: "",
        otherNeeds: "",

        avoidStairs: false,
        preferElevator: false,
        preferRamps: false,
        minimizeWalking: false,
        preferRestPoints: false,
        voiceInstructions: false,
        largeText: false,
        highContrast: false,
        visualAlerts: false,
        simpleInstructions: false
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTextChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("Saving your accessibility profile...");

        const token = localStorage.getItem("token");

        if (!token) {
            setMessage("You are not logged in. Please login again.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/profile",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            console.log("Onboarding response:", data);

            if (response.ok && data.success) {
                setMessage(
                    "Accessibility profile saved successfully!"
                );

                setTimeout(() => {
                    navigate("/home");
                }, 1000);
            } else {
                setMessage(
                    data.message || "Could not save your profile."
                );
            }

        } catch (error) {
            console.error("Onboarding error:", error);

            setMessage(
                "Could not connect to the backend. Make sure the backend is running."
            );
        }

        setLoading(false);
    };

    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "40px auto",
                padding: "30px",
                fontFamily: "Arial"
            }}
        >
            <h1>ACCESSMISSION</h1>

            <h2>Personal Accessibility Profile</h2>

            <p>
                Tell ACCESSMISSION what you need so we can
                plan your missions around your requirements.
            </p>

            <form onSubmit={handleSubmit}>

                <h3>Mobility Needs</h3>

                <textarea
                    name="mobilityNeeds"
                    value={formData.mobilityNeeds}
                    onChange={handleTextChange}
                    placeholder="Example: Cannot use stairs, wheelchair user, difficulty walking..."
                    rows="4"
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box"
                    }}
                />

                <h3>Vision Needs</h3>

                <textarea
                    name="visionNeeds"
                    value={formData.visionNeeds}
                    onChange={handleTextChange}
                    placeholder="Example: Low vision, blind, need large text..."
                    rows="4"
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box"
                    }}
                />

                <h3>Hearing Needs</h3>

                <textarea
                    name="hearingNeeds"
                    value={formData.hearingNeeds}
                    onChange={handleTextChange}
                    placeholder="Example: Deaf, hard of hearing, need visual alerts..."
                    rows="4"
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box"
                    }}
                />

                <h3>Cognitive / Communication Needs</h3>

                <textarea
                    name="cognitiveNeeds"
                    value={formData.cognitiveNeeds}
                    onChange={handleTextChange}
                    placeholder="Example: Prefer simple instructions..."
                    rows="4"
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box"
                    }}
                />

                <h3>Other Requirements</h3>

                <textarea
                    name="otherNeeds"
                    value={formData.otherNeeds}
                    onChange={handleTextChange}
                    placeholder="Anything else ACCESSMISSION should know..."
                    rows="4"
                    style={{
                        width: "100%",
                        padding: "10px",
                        boxSizing: "border-box"
                    }}
                />

                <h3>Navigation Preferences</h3>

                <label>
                    <input
                        type="checkbox"
                        name="avoidStairs"
                        checked={formData.avoidStairs}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Avoid stairs
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="preferElevator"
                        checked={formData.preferElevator}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Prefer elevators
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="preferRamps"
                        checked={formData.preferRamps}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Prefer ramps
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="minimizeWalking"
                        checked={formData.minimizeWalking}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Minimize walking
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="preferRestPoints"
                        checked={formData.preferRestPoints}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Prefer rest points
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="voiceInstructions"
                        checked={formData.voiceInstructions}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Voice instructions
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="largeText"
                        checked={formData.largeText}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Large text
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="highContrast"
                        checked={formData.highContrast}
                        onChange={handleCheckboxChange}
                    />
                    {" "}High contrast
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="visualAlerts"
                        checked={formData.visualAlerts}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Visual alerts
                </label>

                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="simpleInstructions"
                        checked={formData.simpleInstructions}
                        onChange={handleCheckboxChange}
                    />
                    {" "}Simple instructions
                </label>

                <br /><br />

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "14px",
                        fontSize: "16px",
                        cursor: loading
                            ? "not-allowed"
                            : "pointer"
                    }}
                >
                    {loading
                        ? "Saving..."
                        : "Save Accessibility Profile"}
                </button>

            </form>

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
    );
}

export default Onboarding;