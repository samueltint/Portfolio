import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProjectLayout from "./pages/project/ProjectLayout";
import Chaos1 from "./pages/project/Chaos1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<ProjectLayout />}>
            <Route path="chaos-1" element={<Chaos1 />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
