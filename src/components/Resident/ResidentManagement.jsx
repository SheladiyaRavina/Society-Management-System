import React, { useState } from "react";
import OwnerForm from "./OwnerForm";
import ResidentList from "./ResidentList";

const ResidentManagement = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show full-page form
  const handleAddResident = () => {
    setIsFormVisible(true);
  };

  // Function to close full-page form
  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="p-6">
      {!isFormVisible && (
        <button
          className="mb-4 px-6 py-2 bg-orange-500 text-white rounded-md"
          onClick={handleAddResident}
        >
          Add New Resident Details
        </button>
      )}

      {/* Show Resident List only if form is not visible */}
      {!isFormVisible && <ResidentList />}

      {/* Full Page Form */}
      {isFormVisible && <OwnerForm onClose={handleCloseForm} />}
    </div>
  );
};

export default ResidentManagement;
