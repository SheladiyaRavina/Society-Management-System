import React, { useState } from 'react';
import { BsRecordCircle } from 'react-icons/bs';

const EditComplaint = ({ isOpen, onClose, existingData }) => {
  const [complainerName, setComplainerName] = useState(existingData?.complainerName || '');
  const [complaintName, setComplaintName] = useState(existingData?.complaintName || '');
  const [description, setDescription] = useState(existingData?.description || '');
  const [wing, setWing] = useState(existingData?.wing || '');
  const [unit, setUnit] = useState(existingData?.unit || '');
  const [priority, setPriority] = useState(existingData?.priority || 'Medium');
  const [status, setStatus] = useState(existingData?.status || 'Open');

  const handleUpdate = () => {
    const updatedComplaint = {
      complainerName,
      complaintName,
      description,
      wing,
      unit,
      priority,
      status,
    };
    console.log('Updated Complaint:', updatedComplaint);
    onClose();
  };

  const renderSelectableButton = (options, selectedValue, setSelectedValue) =>
    options.map((label) => (
      <button
        key={label}
        type="button"
        onClick={() => setSelectedValue(label)}
        className={`flex-1 px-4 py-2 rounded-full border-2 transition-all ${
          selectedValue === label
            ? 'border-orange-500 text-orange-500'
            : 'border-gray-300 text-gray-700 hover:border-orange-500'
        }`}
      >
        <BsRecordCircle className="mr-2" />
        {label}
      </button>
    ));

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="inline-block bg-white rounded-lg overflow-hidden shadow-xl sm:max-w-md w-full">
            <div className="px-6 py-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Complaint</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={complainerName}
                  onChange={(e) => setComplainerName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Complainer Name"
                />
                <input
                  type="text"
                  value={complaintName}
                  onChange={(e) => setComplaintName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Complaint Name"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Description"
                ></textarea>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={wing}
                    onChange={(e) => setWing(e.target.value)}
                    className="w-1/2 px-3 py-2 border rounded-md"
                    placeholder="Wing"
                  />
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-1/2 px-3 py-2 border rounded-md"
                    placeholder="Unit"
                  />
                </div>
                <div className="flex space-x-2">
                  {renderSelectableButton(['High', 'Medium', 'Low'], priority, setPriority)}
                </div>
                <div className="flex space-x-2">
                  {renderSelectableButton(['Open', 'Pending', 'Solved'], status, setStatus)}
                </div>
              </div>
            </div>
            <div className="flex px-6 py-3 space-x-3">
              <button onClick={onClose} className="flex-1 border">Cancel</button>
              <button onClick={handleUpdate} className="flex-1 bg-orange-500">Update</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EditComplaint;
