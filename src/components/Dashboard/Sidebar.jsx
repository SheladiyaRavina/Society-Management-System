import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaHome, FaUserFriends, FaDollarSign, FaBuilding, 
  FaExclamationTriangle, FaShieldAlt, FaUserShield, 
  FaBullhorn, FaSignOutAlt 
} from 'react-icons/fa';
import { PiLineVerticalBold } from "react-icons/pi";

export default function Sidebar() {
  const [activePage, setActivePage] = useState('Dashboard');
  const navigate = useNavigate();

  const handleItemClick = (page, path) => {
    setActivePage(page);
    navigate(path);
  };

  return (
    <div className="flex flex-col h-screen bg-white text-gray-700 w-64 p-4">
      {/* Logo or Header */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        <span
          className="bg-clip-text text-transparent text-3xl font-bold"
          style={{
            backgroundImage: "linear-gradient(to right, #FE512E, #F09619)"
          }}
        >
          Dash
        </span>
        Stack
      </h1>

      {/* Divider Line */}
      <hr className="border-[#F4F4F4] mb-7" />

      {/* Menu items */}
      <nav className="flex-1 space-y-4">
        <MenuItem 
          icon={<FaHome className="h-6 w-6" />} 
          label="Dashboard" 
          active={activePage === 'Dashboard'} 
          onClick={() => handleItemClick('Dashboard', '/dashboard')} 
        />
        <MenuItem 
          icon={<FaUserFriends className="h-6 w-6" />} 
          label="Resident Management" 
          active={activePage === 'Resident Management'} 
          onClick={() => handleItemClick('Resident Management', '/resident-management')} 
        />

        {/* Financial Management Section */}
        <div>
          <MenuItem 
            icon={<FaDollarSign className="h-6 w-6" />} 
            label="Financial Management" 
            active={activePage === 'Financial Management'} 
            onClick={() => handleItemClick('Financial Management', '/financial-management/income')} 
          />
          {activePage === 'Financial Management' && (
            <div className="pl-6 space-y-2 text-gray-700 hover:text-black">
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Income" 
                active={activePage === 'Income'} 
                onClick={() => handleItemClick('Income', '/financial-management/income')} 
              />
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Expense" 
                active={activePage === 'Expense'} 
                onClick={() => handleItemClick('Expense', '/financial-management/expense')} 
              />
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Note" 
                active={activePage === 'Note'} 
                onClick={() => handleItemClick('Note', '/financial-management/note')} 
              />
            </div>
          )}
        </div>

        <MenuItem 
          icon={<FaBuilding className="h-6 w-6" />} 
          label="Facility Management" 
          active={activePage === 'Facility Management'} 
          onClick={() => handleItemClick('Facility Management', '/facility-management')} 
        />

        {/* Complaint Tracking Section */}
        <div>
          <MenuItem 
            icon={<FaExclamationTriangle className="h-6 w-6" />} 
            label="Complaint Tracking" 
            active={activePage === 'Complaint Tracking'} 
            onClick={() => handleItemClick('Complaint Tracking', '/create-complaint')}  
          />
          {activePage === 'Complaint Tracking' && (
            <div className="pl-6 space-y-2 text-gray-700 hover:text-black">
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Create Complaint" 
                active={activePage === 'Create'} 
                onClick={() => handleItemClick('Create', '/create-complaint')} 
              />
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Request Tracking" 
                active={activePage === 'Tracking'} 
                onClick={() => handleItemClick('Tracking', '/request-tracking')} 
              />
            </div>
          )}
        </div>

        {/* Security Management Section */}
        <div>
          <MenuItem 
            icon={<FaShieldAlt className="h-6 w-6" />} 
            label="Security Management" 
            active={activePage === 'Security Management'} 
            onClick={() => handleItemClick('Security Management', '/security-visitor')}  
          />
          {activePage === 'Security Management' && (
            <div className="pl-6 space-y-2 text-gray-700 hover:text-black">
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Visitor Logs" 
                active={activePage === 'Visitor'} 
                onClick={() => handleItemClick('Visitor', '/security-visitor')} 
              />
              <MenuItem 
                icon={<PiLineVerticalBold className="h-5 w-5" />} 
                label="Security Protocols" 
                active={activePage === 'Security'} 
                onClick={() => handleItemClick('Security', '/security-protocols')} 
              />
            </div>
          )}
        </div>

        <MenuItem 
          icon={<FaUserShield className="h-6 w-6" />} 
          label="Security Guard" 
          active={activePage === 'Security Guard'} 
          onClick={() => handleItemClick('Security Guard', '/security-guard')} 
        />
        <MenuItem 
          icon={<FaBullhorn className="h-6 w-6" />} 
          label="Announcement" 
          active={activePage === 'Announcement'} 
          onClick={() => handleItemClick('Announcement', '/announcement')} 
        />
      </nav>

      {/* Logout */}
      <div className="mt-4">
        <MenuItem 
          icon={<FaSignOutAlt className="h-6 w-6 text-red-500" />} 
          label="Logout" 
          textColor="text-red-500" 
          onClick={() => handleItemClick('Logout', '/logout')} 
        />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active, onClick, textColor }) {
  return (
    <div
      className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer 
        ${active ? 'text-white' : 'hover:bg-gray-100'} 
        ${textColor || 'text-gray-700'}`}
      style={{
        background: active ? 'linear-gradient(to right, #FE512E, #F09619)' : 'none',
      }}
      onClick={onClick}
    >
      {icon}
      <span className={`ml-2 ${active ? 'font-semibold' : 'font-normal'}`}>{label}</span>
    </div>
  );
}
