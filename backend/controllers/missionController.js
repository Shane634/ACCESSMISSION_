const db = require("../config/db");


// ==========================================
// CREATE MISSION
// ==========================================

const createMission = (req, res) => {
    const userId = req.user.id;

    const {
        title,
        description,
        institutionId,
        missionType
    } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Mission title and description are required."
        });
    }

    const sql = `
        INSERT INTO missions
        (
            user_id,
            institution_id,
            title,
            description,
            mission_type,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            userId,
            institutionId || 1,
            title,
            description,
            missionType || "GENERAL",
            "DRAFT"
        ],
        (err, result) => {

            if (err) {
                console.error(
                    "Create mission error:",
                    err.message
                );

                return res.status(500).json({
                    success: false,
                    message: "Could not create mission.",
                    error: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Mission created successfully!",

                mission: {
                    id: result.insertId,
                    userId: userId,
                    institutionId: institutionId || 1,
                    title: title,
                    description: description,
                    missionType: missionType || "GENERAL",
                    status: "DRAFT"
                }
            });
        }
    );
};


// ==========================================
// ANALYZE MISSION
// ==========================================

const analyzeMission = (req, res) => {

    const userId = req.user.id;
    const missionId = req.params.id;

    // First get the mission
    const missionSql = `
        SELECT *
        FROM missions
        WHERE id = ?
        AND user_id = ?
    `;

    db.query(
        missionSql,
        [missionId, userId],
        (err, missions) => {

            if (err) {
                console.error(
                    "Mission fetch error:",
                    err.message
                );

                return res.status(500).json({
                    success: false,
                    message: "Could not fetch mission."
                });
            }

            if (missions.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Mission not found."
                });
            }

            const mission = missions[0];

            // Mark mission as analyzing
            const analyzingSql = `
                UPDATE missions
                SET status = 'ANALYZING'
                WHERE id = ?
            `;

            db.query(
                analyzingSql,
                [missionId],
                (updateErr) => {

                    if (updateErr) {
                        console.error(
                            "Mission status error:",
                            updateErr.message
                        );
                    }

                    /*
                     * Simple deterministic Mission Intelligence.
                     *
                     * Later this can be replaced by a real AI service.
                     */

                    const description =
                        mission.description.toLowerCase();

                    let steps = [];

                    // ------------------------------------------
                    // COLLEGE EXAM DEMO
                    // ------------------------------------------

                    if (
                        description.includes("block c") &&
                        (
                            description.includes("room 204") ||
                            description.includes("204")
                        )
                    ) {

                        steps = [
                            {
                                number: 1,
                                title: "Enter the campus",
                                description:
                                    "Reach an accessible campus entrance.",
                                locationName: "Entrance A"
                            },

                            {
                                number: 2,
                                title: "Reach Block C",
                                description:
                                    "Travel from the entrance to Block C.",
                                locationName:
                                    "Block C Main Entrance"
                            },

                            {
                                number: 3,
                                title: "Reach Floor 2",
                                description:
                                    "Use an accessible vertical route to reach Floor 2.",
                                locationName: "Elevator 2"
                            },

                            {
                                number: 4,
                                title: "Find Room 204",
                                description:
                                    "Follow the accessible corridor to Room 204.",
                                locationName: "Room 204"
                            },

                            {
                                number: 5,
                                title: "Complete the mission",
                                description:
                                    "Reach Room 204 and attend the exam.",
                                locationName: "Room 204"
                            }
                        ];

                    }

                    // ------------------------------------------
                    // GENERAL MISSION
                    // ------------------------------------------

                    else {

                        steps = [
                            {
                                number: 1,
                                title: "Reach the destination",
                                description:
                                    "Travel to the required institution or location.",
                                locationName: null
                            },

                            {
                                number: 2,
                                title: "Enter the location",
                                description:
                                    "Use an available and accessible entrance.",
                                locationName: null
                            },

                            {
                                number: 3,
                                title: "Navigate to the target",
                                description:
                                    "Follow the most suitable accessible route.",
                                locationName: null
                            },

                            {
                                number: 4,
                                title: "Reach the required facility",
                                description:
                                    "Continue to the specific destination.",
                                locationName: null
                            },

                            {
                                number: 5,
                                title: "Complete the mission",
                                description:
                                    "Reach the destination and complete the task.",
                                locationName: null
                            }
                        ];
                    }


                    // ------------------------------------------
                    // DELETE OLD STEPS
                    // ------------------------------------------

                    const deleteSql = `
                        DELETE FROM mission_steps
                        WHERE mission_id = ?
                    `;

                    db.query(
                        deleteSql,
                        [missionId],
                        (deleteErr) => {

                            if (deleteErr) {
                                console.error(
                                    "Delete steps error:",
                                    deleteErr.message
                                );

                                return res.status(500).json({
                                    success: false,
                                    message:
                                        "Could not prepare mission steps."
                                });
                            }


                            // ------------------------------------------
                            // INSERT STEPS ONE BY ONE
                            // ------------------------------------------

                            let completed = 0;

                            steps.forEach((step) => {

                                const locationSql = `
                                    SELECT id
                                    FROM locations
                                    WHERE name = ?
                                    LIMIT 1
                                `;

                                if (!step.locationName) {

                                    insertStep(null);

                                } else {

                                    db.query(
                                        locationSql,
                                        [step.locationName],
                                        (locationErr, locations) => {

                                            if (locationErr) {
                                                console.error(
                                                    "Location lookup error:",
                                                    locationErr.message
                                                );

                                                insertStep(null);
                                                return;
                                            }

                                            const locationId =
                                                locations.length > 0
                                                    ? locations[0].id
                                                    : null;

                                            insertStep(locationId);
                                        }
                                    );
                                }


                                function insertStep(locationId) {

                                    const stepSql = `
                                        INSERT INTO mission_steps
                                        (
                                            mission_id,
                                            step_number,
                                            title,
                                            description,
                                            location_id,
                                            status,
                                            critical
                                        )
                                        VALUES (?, ?, ?, ?, ?, ?, ?)
                                    `;

                                    db.query(
                                        stepSql,
                                        [
                                            missionId,
                                            step.number,
                                            step.title,
                                            step.description,
                                            locationId,
                                            "PENDING",
                                            0
                                        ],
                                        (stepErr) => {

                                            if (stepErr) {
                                                console.error(
                                                    "Step insert error:",
                                                    stepErr.message
                                                );
                                            }

                                            completed++;

                                            if (
                                                completed ===
                                                steps.length
                                            ) {

                                                finishAnalysis();
                                            }
                                        }
                                    );
                                }

                            });


                            // ------------------------------------------
                            // FINISH ANALYSIS
                            // ------------------------------------------

                            function finishAnalysis() {

                                const readinessScore = 91;

                                const finishSql = `
                                    UPDATE missions
                                    SET
                                        status = 'READY',
                                        readiness_score = ?
                                    WHERE id = ?
                                `;

                                db.query(
                                    finishSql,
                                    [
                                        readinessScore,
                                        missionId
                                    ],
                                    (finishErr) => {

                                        if (finishErr) {
                                            console.error(
                                                "Mission finish error:",
                                                finishErr.message
                                            );

                                            return res.status(500).json({
                                                success: false,
                                                message:
                                                    "Mission analysis completed but status update failed."
                                            });
                                        }

                                        res.json({
                                            success: true,
                                            message:
                                                "Mission analyzed successfully!",

                                            missionId:
                                                Number(missionId),

                                            readinessScore:
                                                readinessScore,

                                            steps: steps
                                        });
                                    }
                                );
                            }

                        }
                    );

                }
            );
        }
    );
};


// ==========================================
// GET MISSION
// ==========================================

const getMission = (req, res) => {

    const userId = req.user.id;
    const missionId = req.params.id;

    const missionSql = `
        SELECT *
        FROM missions
        WHERE id = ?
        AND user_id = ?
    `;

    db.query(
        missionSql,
        [missionId, userId],
        (err, missions) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Could not fetch mission."
                });
            }

            if (missions.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Mission not found."
                });
            }

            const stepsSql = `
                SELECT
                    id,
                    mission_id,
                    step_number,
                    title,
                    description,
                    location_id,
                    status,
                    critical
                FROM mission_steps
                WHERE mission_id = ?
                ORDER BY step_number ASC
            `;

            db.query(
                stepsSql,
                [missionId],
                (stepsErr, steps) => {

                    if (stepsErr) {
                        return res.status(500).json({
                            success: false,
                            message:
                                "Could not fetch mission steps."
                        });
                    }

                    res.json({
                        success: true,

                        mission: missions[0],

                        steps: steps
                    });
                }
            );
        }
    );
};


module.exports = {
    createMission,
    analyzeMission,
    getMission
};