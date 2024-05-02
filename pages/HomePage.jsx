import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsernameInput from "../src/components/UsernameInput.jsx";
import UploadCsv from "../src/components/UploadCsv.jsx";
import Tabele from "../src/components/Table.jsx";

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameInput />} />
        <Route path="/upload" element={<UploadCsv />} />
        <Route path="/table" element={<Tabele />} />
      </Routes>
    </Router>
  );
}
