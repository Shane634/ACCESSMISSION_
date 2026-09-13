import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import CreateMission from "./pages/CreateMission";
import MissionAnalysis from "./pages/MissionAnalysis";
import DependencyAnalysis from "./pages/DependencyAnalysis/Analysis.jsx";
import MissionReadiness from "./pages/MissionReadiness";
import LiveMission from "./pages/LiveMission";
import MissionRecovery from "./pages/MissionRecovery";
import MissionComplete from "./pages/MissionComplete";



import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>

                    {/* Public Routes */}

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />


                    {/* Protected Routes */}

                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/onboarding"
                        element={
                            <ProtectedRoute>
                                <Onboarding />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/missions/create"
                        element={
                            <ProtectedRoute>
                                <CreateMission />
                            </ProtectedRoute>
                        }
                    />
                        
                    <Route
                        path="/missions/:id"
                        element={
                            <ProtectedRoute>
                                <MissionAnalysis />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/missions/:id/dependencies"
                        element={
                            <ProtectedRoute>
                                <DependencyAnalysis />
                            </ProtectedRoute>
                        }
                    />

                    
                    <Route
                        path="/missions/:id/readiness"
                        element={
                            <ProtectedRoute>
                                <MissionReadiness />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/missions/:id/live"
                        element={
                            <ProtectedRoute>
                                <LiveMission />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/missions/:id/recovery"
                        element={
                            <ProtectedRoute>
                                <MissionRecovery />
                             </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/missions/:id/complete"
                        element={
                            <ProtectedRoute>
                                <MissionComplete />
                            </ProtectedRoute>
                        }
                    />

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;