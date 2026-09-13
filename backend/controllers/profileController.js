const db = require("../config/db");

const saveProfile = (req, res) => {
    const userId = req.user.id;

    const {
        mobilityNeeds,
        visionNeeds,
        hearingNeeds,
        cognitiveNeeds,
        otherNeeds,

        avoidStairs,
        preferElevator,
        preferRamps,
        minimizeWalking,
        preferRestPoints,
        voiceInstructions,
        largeText,
        highContrast,
        visualAlerts,
        simpleInstructions
    } = req.body;

    const profileSql = `
        INSERT INTO accessibility_profiles
        (
            user_id,
            mobility_needs,
            vision_needs,
            hearing_needs,
            cognitive_needs,
            other_needs
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        profileSql,
        [
            userId,
            mobilityNeeds,
            visionNeeds,
            hearingNeeds,
            cognitiveNeeds,
            otherNeeds
        ],
        (err) => {
            if (err) {
                console.error("Profile error:", err);

                return res.status(500).json({
                    success: false,
                    message: "Could not save accessibility profile."
                });
            }

            const preferencesSql = `
                INSERT INTO accessibility_preferences
                (
                    user_id,
                    avoid_stairs,
                    prefer_elevator,
                    prefer_ramps,
                    minimize_walking,
                    prefer_rest_points,
                    voice_instructions,
                    large_text,
                    high_contrast,
                    visual_alerts,
                    simple_instructions
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                preferencesSql,
                [
                    userId,
                    avoidStairs,
                    preferElevator,
                    preferRamps,
                    minimizeWalking,
                    preferRestPoints,
                    voiceInstructions,
                    largeText,
                    highContrast,
                    visualAlerts,
                    simpleInstructions
                ],
                (err) => {
                    if (err) {
                        console.error(
                            "Preferences error:",
                            err
                        );

                        return res.status(500).json({
                            success: false,
                            message:
                                "Profile saved, but preferences could not be saved."
                        });
                    }

                    res.status(201).json({
                        success: true,
                        message:
                            "Accessibility profile saved successfully!"
                    });
                }
            );
        }
    );
};

module.exports = {
    saveProfile
};