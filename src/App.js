
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Dashboard/Header';
import Sidebar from './components/Dashboard/Sidebar';
import Dashboard from './components/Dashboard/DahboardPage'
import FinancialManagement from './components/Financial/Income/FinancialManagement'
import Expence from './components/Financial/Expence/Expence.jsx'
import Note from './components/Financial/Note/Note.jsx'
import FacilityManagement from './components/FacilityManagement/FacilityManagement.jsx'
import SecurityVisitor from './components/SecurityManagement/SecurityVisitor.jsx'
import SecurityProtocols from './components/SecurityManagement/SecurityProtocols.jsx'
import SecurityGuard from './components/SecurityGuard/SecurityGuard.jsx'
import Announcement from './components/Announcement/Announcement.jsx'


function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#F6F8FB] ">
        {<Sidebar />}
        <div className="flex-1 flex flex-col">
          {<Header />}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F6F8FB] ">
            <Routes>
              {/* Define routes for each page */}
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Residant Management Routes */}

              {/* Financial Management Routes */}
              <Route path="/financial-management/income" element={<FinancialManagement />} />
              <Route path="/financial-management/expense" element={<Expence />} />
              <Route path="/financial-management/note" element={<Note />} />

              {/* Facility Management Routes */}
              <Route path="/facility-management" element={<FacilityManagement />} />

              {/* Complaint Tracking Routes */}

              {/* Security Management Routes */}
              <Route path="/security-visitor" element={<SecurityVisitor />} />
              <Route path="/security-protocols" element={<SecurityProtocols />} />

              {/* Security Guard Routes */}
              <Route path="/security-guard" element={<SecurityGuard />} />
              <Route path="/announcement" element={<Announcement />} />

              {/* Default Route */}
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
export default App;


