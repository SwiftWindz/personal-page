import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Resume from "./pages/Resume";


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
