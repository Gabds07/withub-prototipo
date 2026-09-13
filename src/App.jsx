import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ProjectDetail from "./pages/ProjectDetail";
import StudentDashboard from "./pages/StudentDashboard";
import NewProject from "./pages/NewProject";
import MentorPanel from "./pages/MentorPanel";
import Register from "./pages/Register";
import MentorIndicators from "./pages/MentorIndicators";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/projeto/:id" element={<ProjectDetail />} />
                <Route path="/aluno" element={<StudentDashboard />} />
                <Route path="/aluno/novo-projeto" element={<NewProject />} />
                <Route path="/mentor" element={<MentorPanel />} />
                <Route path="/mentor/indicadores" element={<MentorIndicators />}/>
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
