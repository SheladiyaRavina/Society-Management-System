import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiSolidUserPin } from "react-icons/bi";

const ResidentList = () => {
  const dummyData = [
    {
      id: 1,
      fullName: "Evelyn Harper",
      unitNumber: "A 1001",
      status: "Occupied",
      residentType: "Tenant",
      phone: "97538785828",
      memberCount: 2,
      vehicleCount: 1,
    },
    {
      id: 2,
      fullName: "Robert Fox",
      unitNumber: "B 2002",
      status: "Vacate",
      residentType: "Owner",
      phone: "9876543210",
      memberCount: 3,
      vehicleCount: 2,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Resident Tenant and Owner Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Unit Number</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Resident Type</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Members</th>
              <th className="px-4 py-2">Vehicles</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((resident) => (
              <tr key={resident.id} className="border-b">
                <td className="px-4 py-2">{resident.fullName}</td>
                <td className="px-4 py-2">{resident.unitNumber}</td>
                <td className="px-4 py-2">{resident.status}</td>
                <td className="px-4 py-2 flex items-center">
                  <BiSolidUserPin
                    className={`mr-2 ${
                      resident.residentType === "Owner"
                        ? "text-indigo-600"
                        : "text-pink-600"
                    }`}
                  />
                  {resident.residentType}
                </td>
                <td className="px-4 py-2">{resident.phone}</td>
                <td className="px-4 py-2">{resident.memberCount}</td>
                <td className="px-4 py-2">{resident.vehicleCount}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <AiFillEdit className="text-green-500" />
                  <AiFillDelete className="text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentList;
