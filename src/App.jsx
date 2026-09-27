import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import DataDeletion from "./pages/DataDeletion";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<Privacy />} />

        <Route
          path="/terms-of-service"
          element={<TermsOfService />}
        />

        <Route
          path="/data-deletion"
          element={<DataDeletion />}
        />

        {/* Optional 404 page */}
        <Route path="/404" element={<NotFound />} />

        {/* Any invalid URL -> Home */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </Layout>
  );
}

export default App;