import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Project from "./pages/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Chaos1" element={<Project entryId="chaos1" />}/>
          <Route path="NSWPolice" element={<Project entryId="police" />}/>
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
