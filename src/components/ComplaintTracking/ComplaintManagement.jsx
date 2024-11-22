// import React, { useState } from 'react';


// const ComplaintManagement = () => {
//   const [requests, setRequests] = useState([
//     {
//       id: "1",
//       requesterName: "Evelyn Harper",
//       requestName: "Unethical Behavior",
//       description: "Regular waste collection services.",
//       requestDate: "2024-02-10",
//       wing: "A",
//       unit: "1001",
//       priority: "Medium",
//       status: "Pending"
//     },
//     {
//       id: "2",
//       requesterName: "Guy Hawkins",
//       requestName: "Preventive Measures",
//       description: "Event and recreational activities.",
//       requestDate: "2024-02-11",
//       wing: "B",
//       unit: "1002",
//       priority: "Low",
//       status: "Solve"
//     },
//     {
//       id: "3",
//       requesterName: "Robert Fox",
//       requestName: "Unethical Behavior",
//       description: "Regular waste collection services.",
//       requestDate: "2024-02-12",
//       wing: "C",
//       unit: "1003",
//       priority: "High",
//       status: "Open"
//     },
//   ]);

//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isCreateOpen, setIsCreateOpen] = useState(false);
//   const [isViewOpen, setIsViewOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
//   const [newRequest, setNewRequest] = useState({
//     requesterName: '',
//     requestName: '',
//     description: '',
//     requestDate: '',
//     wing: '',
//     unit: '',
//     priority: 'Medium',
//     status: 'Open'
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRequest(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCreate = () => {
//     setRequests(prev => [...prev, { ...newRequest, id: Date.now().toString() }]);
//     setIsCreateOpen(false);
//     setNewRequest({
//       requesterName: '',
//       requestName: '',
//       description: '',
//       requestDate: '',
//       wing: '',
//       unit: '',
//       priority: 'Medium',
//       status: 'Open'
//     });
//   };

//   const handleEdit = () => {
//     setRequests(prev => prev.map(req => req.id === selectedRequest.id ? selectedRequest : req));
//     setIsEditOpen(false);
//   };

//   const handleDelete = () => {
//     setRequests(prev => prev.filter(req => req.id !== selectedRequest.id));
//     setIsDeleteOpen(false);
//   };

//   const getPriorityClass = (priority) => {
//     switch (priority) {
//       case "High": return "priority-high";
//       case "Medium": return "priority-medium";
//       case "Low": return "priority-low";
//       default: return "";
//     }
//   };

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "Open": return "status-open";
//       case "Pending": return "status-pending";
//       case "Solve": return "status-solve";
//       default: return "";
//     }
//   };

//   return (
//     <div className="complaint-management">
//       <div className="header">
//         <h1>Create Complaint</h1>
//         <button className="create-btn" onClick={() => setIsCreateOpen(true)}>Create Request</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Requester Name</th>
//             <th>Request Name</th>
//             <th>Description</th>
//             <th>Request Date</th>
//             <th>Unit Number</th>
//             <th>Priority</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request) => (
//             <tr key={request.id}>
//               <td>{request.requesterName}</td>
//               <td>{request.requestName}</td>
//               <td>{request.description}</td>
//               <td>{request.requestDate}</td>
//               <td>{request.wing} {request.unit}</td>
//               <td><span className={`priority ${getPriorityClass(request.priority)}`}>{request.priority}</span></td>
//               <td><span className={`status ${getStatusClass(request.status)}`}>{request.status}</span></td>
//               <td>
//                 <button className="action-btn view" onClick={() => { setSelectedRequest(request); setIsViewOpen(true); }}>View</button>
//                 <button className="action-btn edit" onClick={() => { setSelectedRequest(request); setIsEditOpen(true); }}>Edit</button>
//                 <button className="action-btn delete" onClick={() => { setSelectedRequest(request); setIsDeleteOpen(true); }}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isCreateOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Create Request</h2>
//             <input name="requesterName" value={newRequest.requesterName} onChange={handleInputChange} placeholder="Requester Name" />
//             <input name="requestName" value={newRequest.requestName} onChange={handleInputChange} placeholder="Request Name" />
//             <input name="description" value={newRequest.description} onChange={handleInputChange} placeholder="Description" />
//             <input name="requestDate" value={newRequest.requestDate} onChange={handleInputChange} type="date" />
//             <input name="wing" value={newRequest.wing} onChange={handleInputChange} placeholder="Wing" />
//             <input name="unit" value={newRequest.unit} onChange={handleInputChange} placeholder="Unit" />
//             <select name="priority" value={newRequest.priority} onChange={handleInputChange}>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </select>
//             <select name="status" value={newRequest.status} onChange={handleInputChange}>
//               <option value="Open">Open</option>
//               <option value="Pending">Pending</option>
//               <option value="Solve">Solve</option>
//             </select>
//             <div className="modal-actions">
//               <button onClick={() => setIsCreateOpen(false)}>Cancel</button>
//               <button onClick={handleCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isViewOpen && selectedRequest && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>View Request</h2>
//             <p><strong>Requester:</strong> {selectedRequest.requesterName}</p>
//             <p><strong>Request:</strong> {selectedRequest.requestName}</p>
//             <p><strong>Description:</strong> {selectedRequest.description}</p>
//             <p><strong>Date:</strong> {selectedRequest.requestDate}</p>
//             <p><strong>Unit:</strong> {selectedRequest.wing} {selectedRequest.unit}</p>
//             <p><strong>Priority:</strong> <span className={`priority ${getPriorityClass(selectedRequest.priority)}`}>{selectedRequest.priority}</span></p>
//             <p><strong>Status:</strong> <span className={`status ${getStatusClass(selectedRequest.status)}`}>{selectedRequest.status}</span></p>
//             <div className="modal-actions">
//               <button onClick={() => setIsViewOpen(false)}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isEditOpen && selectedRequest && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Edit Request</h2>
//             <input name="requesterName" value={selectedRequest.requesterName} onChange={(e) => setSelectedRequest({...selectedRequest, requesterName: e.target.value})} />
//             <input name="requestName" value={selectedRequest.requestName} onChange={(e) => setSelectedRequest({...selectedRequest, requestName: e.target.value})} />
//             <input name="description" value={selectedRequest.description} onChange={(e) => setSelectedRequest({...selectedRequest, description: e.target.value})} />
//             <input name="requestDate" value={selectedRequest.requestDate} onChange={(e) => setSelectedRequest({...selectedRequest, requestDate: e.target.value})} type="date" />
//             <input name="wing" value={selectedRequest.wing} onChange={(e) => setSelectedRequest({...selectedRequest, wing: e.target.value})} />
//             <input name="unit" value={selectedRequest.unit} onChange={(e) => setSelectedRequest({...selectedRequest, unit: e.target.value})} />
//             <select name="priority" value={selectedRequest.priority} onChange={(e) => setSelectedRequest({...selectedRequest, priority: e.target.value})}>
//               <option value="High">High</option>
//               <option value="Medium">Medium</option>
//               <option value="Low">Low</option>
//             </select>
//             <select name="status" value={selectedRequest.status} onChange={(e) => setSelectedRequest({...selectedRequest, status: e.target.value})}>
//               <option value="Open">Open</option>
//               <option value="Pending">Pending</option>
//               <option value="Solve">Solve</option>
//             </select>
//             <div className="modal-actions">
//               <button onClick={() => setIsEditOpen(false)}>Cancel</button>
//               <button onClick={handleEdit}>Save</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isDeleteOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Delete Request</h2>
//             <p>Are you sure you want to delete this request?</p>
//             <div className="modal-actions">
//               <button onClick={() => setIsDeleteOpen(false)}>Cancel</button>
//               <button onClick={handleDelete}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComplaintManagement;