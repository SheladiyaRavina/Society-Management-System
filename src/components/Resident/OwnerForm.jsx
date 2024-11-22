import React, { useState } from 'react';
import { PlusIcon, MoreHorizontalIcon, UploadIcon, SearchIcon, ChevronDownIcon } from 'lucide-react';


const OwnerForm = () => {
    const [activeTab, setActiveTab] = useState('tenant');

  
  // Input component
  const Input = ({ label, ...props }) => (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">{label}</label>
      <input className="px-3 py-2 border rounded-md" {...props} />
    </div>
  );
  
  // Select component
  const Select = ({ label, options, ...props }) => (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">{label}</label>
      <div className="relative">
        <select className="appearance-none w-full px-3 py-2 border rounded-md pr-8" {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
  return (
    <>
    <div className="mb-4">
    <button
      className={`mr-4 px-4 py-2 rounded-md ${activeTab === 'owner' ? 'bg-orange-500 text-white' : 'bg-white'}`}
      onClick={() => setActiveTab('owner')}
    >
      Owner
    </button>
    <button
      className={`px-4 py-2 rounded-md ${activeTab === 'tenant' ? 'bg-orange-500 text-white' : 'bg-white'}`}
      onClick={() => setActiveTab('tenant')}
    >
      Tenant
    </button>
    </div>
    
    {/* Owner Tab */}
    {activeTab === 'owner' && (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Owner Details</h2>
      <form className="space-y-4">
        <Input label="Owner Full Name*" placeholder="Enter full name" />
        <Input label="Owner Phone*" placeholder="+91" />
        <Input label="Owner Address*" placeholder="Enter address" />
      </form>
    </div>
    )}
    
    {/* Tenant Tab */}
    {activeTab === 'tenant' && (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Tenant Details</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Full Name*" placeholder="Enter full name" />
          <Input label="Phone Number*" placeholder="+91" />
          <Input label="Email Address" type="email" placeholder="Enter email" />
          <Input label="Age*" placeholder="Enter age" />
          <Select
            label="Gender*"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
          />
        </div>
      </form>
    </div>
    )}
    </>
  );
};

export default OwnerForm;
