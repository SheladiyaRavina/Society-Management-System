

import { useState } from 'react';
import { MoreHorizontal, Plus, Bell } from 'lucide-react';

export default function TenantForm() {
  const [activeTab, setActiveTab] = useState('maintenance');
  const [showCreateIncomeModal, setShowCreateIncomeModal] = useState(false);

  const maintenanceRecords = [
    {
      id: "1",
      name: "Cody Fisher",
      unitNumber: "A 1001",
      date: "10/02/2024",
      status: "tenant",
      phoneNumber: "92524 34522",
      amount: 1000,
      penalty: null,
      paymentStatus: "pending",
      paymentMethod: "online"
    },
    {
      id: "2",
      name: "Esther Howard",
      unitNumber: "B 1002",
      date: "11/02/2024",
      status: "owner",
      phoneNumber: "92524 12365",
      amount: 1000,
      penalty: 250,
      paymentStatus: "done",
      paymentMethod: "cash"
    },
  ];

  const otherIncomeRecords = [
    {
      id: "1",
      title: "Ganesh Chaturthi",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "15/07/2024",
      description: "Celebration of Ganesh Chaturthi."
    },
    {
      id: "2",
      title: "Navratri",
      amountPerMember: 1500,
      totalMembers: 12,
      date: "01/07/2024",
      dueDate: "15/07/2024",
      description: "Celebration of Navratri."
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">


      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4">
        

        {/* Tabs */}
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'maintenance' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('maintenance')}
          >
            Maintenance
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'otherIncome' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('otherIncome')}
          >
            Other Income
          </button>
        </div>

        {/* Maintenance Table */}
        {activeTab === 'maintenance' && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Maintenance Records</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Unit Number</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Phone</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                    <th className="py-2 px-4 border-b">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenanceRecords.map((record) => (
                    <tr key={record.id}>
                      <td className="py-2 px-4 border-b">{record.name}</td>
                      <td className="py-2 px-4 border-b">{record.unitNumber}</td>
                      <td className="py-2 px-4 border-b">{record.date}</td>
                      <td className="py-2 px-4 border-b">{record.status}</td>
                      <td className="py-2 px-4 border-b">{record.phoneNumber}</td>
                      <td className="py-2 px-4 border-b">{record.amount}</td>
                      <td className="py-2 px-4 border-b">{record.paymentStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other Income Table */}
        {activeTab === 'otherIncome' && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Other Income Records</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Title</th>
                    <th className="py-2 px-4 border-b">Amount Per Member</th>
                    <th className="py-2 px-4 border-b">Total Members</th>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {otherIncomeRecords.map((record) => (
                    <tr key={record.id}>
                      <td className="py-2 px-4 border-b">{record.title}</td>
                      <td className="py-2 px-4 border-b">{record.amountPerMember}</td>
                      <td className="py-2 px-4 border-b">{record.totalMembers}</td>
                      <td className="py-2 px-4 border-b">{record.date}</td>
                      <td className="py-2 px-4 border-b">{record.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
