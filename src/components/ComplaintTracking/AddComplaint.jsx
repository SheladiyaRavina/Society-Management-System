import React, { useState } from 'react';
import { BsRecordCircle } from 'react-icons/bs';

const AddComplaint = ({ isOpen, onClose }) => {
  const [complainerName, setComplainerName] = useState('');
  const [complaintName, setComplaintName] = useState('');
  const [description, setDescription] = useState('');
  const [wing, setWing] = useState('');
  const [unit, setUnit] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('Open');

  const handleSave = () => {
    const newComplaint = {
      complainerName,
      complaintName,
      description,
      wing,
      unit,
      priority,
      status,
    };
    console.log('New Complaint:', newComplaint);
    onClose();
  };

  const renderSelectableButton = (options, selectedValue, setSelectedValue) =>
    options.map((label) => (
      <button
        key={label}
        type="button"
        onClick={() => setSelectedValue(label)}
        className={`flex-1 flex items-center justify-center px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
          selectedValue === label
            ? 'border-orange-500 text-orange-500'
            : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Complaint</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={complainerName}
                  onChange={(e) => setComplainerName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                  placeholder="Complainer Name"
                />
                <input
                  type="text"
                  value={complaintName}
                  onChange={(e) => setComplaintName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                  placeholder="Complaint Name"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                  placeholder="Description"
                  rows="3"
                ></textarea>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={wing}
                    onChange={(e) => setWing(e.target.value)}
                    className="w-1/2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
                    placeholder="Wing"
                  />
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-1/2 px-3 py-2 border rounded-md focus:ring-2 focus:ring-orange-500"
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
            <div className="flex px-6 py-3 bg-gray-50 space-x-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddComplaint;
