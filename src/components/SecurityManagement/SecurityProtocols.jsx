import React, { useState } from 'react'
import { MdEditSquare } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaTimes } from 'react-icons/fa';

export default function SecurityProtocols() {
  const [protocols, setProtocols] = useState([
    { id: 1, title: "Physical Security", description: "Implementing surveillance cameras in public spaces.", date: "11/01/2024", time: "3:45 PM" },
    { id: 2, title: "Cybersecurity", description: "Securing critical infrastructure, government systems.", date: "12/01/2024", time: "6:40 AM" },
    { id: 3, title: "Legal Measures", description: "Enforcing and updating laws and regulations.", date: "13/01/2024", time: "1:00 PM" },
    { id: 4, title: "Social Engagement", description: "Fostering collaboration between law enforcement.", date: "14/01/2024", time: "6:20 PM" },
  ])

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedProtocol, setSelectedProtocol] = useState(null)
  const [newProtocol, setNewProtocol] = useState({ title: '', description: '', date: '', time: '' })

  const openModal = (modalType, protocol = null) => {
    setSelectedProtocol(protocol)
    switch (modalType) {
      case 'create':
        setIsCreateModalOpen(true)
        break
      case 'edit':
        setIsEditModalOpen(true)
        setNewProtocol(protocol)
        break
      case 'view':
        setIsViewModalOpen(true)
        break
      case 'delete':
        setIsDeleteModalOpen(true)
        break
    }
  }

  const closeModal = (modalType) => {
    switch (modalType) {
      case 'create':
        setIsCreateModalOpen(false)
        break
      case 'edit':
        setIsEditModalOpen(false)
        break
      case 'view':
        setIsViewModalOpen(false)
        break
      case 'delete':
        setIsDeleteModalOpen(false)
        break
    }
    setSelectedProtocol(null)
    setNewProtocol({ title: '', description: '', date: '', time: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProtocol(prev => ({ ...prev, [name]: value }))
  }

  const handleCreateProtocol = (e) => {
    e.preventDefault()
    const id = protocols.length + 1
    setProtocols([...protocols, { id, ...newProtocol }])
    closeModal('create')
  }

  const handleEditProtocol = (e) => {
    e.preventDefault()
    setProtocols(protocols.map(p => p.id === selectedProtocol.id ? { ...p, ...newProtocol } : p))
    closeModal('edit')
  }

  const handleDeleteProtocol = () => {
    setProtocols(protocols.filter(p => p.id !== selectedProtocol.id))
    closeModal('delete')
  }

  return (

    <div className="flex bg-[#FDF5FB]">
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-5">
        <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#202224]">Security Protocols</h3>
                <button
                 onClick={() => openModal('create')}
                  className="text-white font-bold py-2 px-4 rounded flex items-center"
                  style={{
                    background: "linear-gradient(to right, #FE512E, #F09619)",
                    transition: "background 0.3s ease",
                  }}
                >
                 
                  Create Protocol
                </button>
              </div>
            </div>

          <div className="overflow-x-auto px-6 py-1">
            <table className="min-w-full rounded-t-lg divide-y divide-gray-200">
              <thead className="bg-[#F1F0FF]">
                <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#000000] tracking-wider">
                        Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#000000] tracking-wider">
                  Description
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#000000] tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#000000] tracking-wider">
                  Time
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#000000] tracking-wider">
                  Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {protocols.map((protocol) => (
              <tr key={protocol.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-[#4f4f4f]">{protocol.title}</td>
                <td className="px-6 py-4 text-sm text-[#4f4f4f]">{protocol.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4f4f4f] text-center">{protocol.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4f4f4f] text-center"><span className='bg-[#f8f6fb] rounded-xl px-3 py-1'>{protocol.time}</span></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                  <button onClick={() => openModal('edit', protocol)} className="p-1 text-[#39973d] bg-blue-50 p-1.5 rounded-md mr-2">
                  <MdEditSquare className="h-4 w-4" />
                  </button>
                  <button onClick={() => openModal('view', protocol)} className="p-1 text-blue-600 bg-blue-50 p-1.5 rounded-md mr-2">
                  <HiMiniEye className="h-4 w-4" />
                  </button>
                  <button onClick={() => openModal('delete', protocol)} className="p-1 text-red-600 bg-blue-50 p-1.5 rounded-md mr-2">
                  <RiDeleteBin5Fill className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4"> Security Protocol</h2>
            <hr className="border-[#F4F4F4] mb-4 mt-4" />
            <form onSubmit={handleCreateProtocol}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="title">Title<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newProtocol.title}
                  placeholder='Enter Title'
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="description">Description<span className="text-red-500">*</span></label>
                <textarea
                  id="description"
                  name="description"
                  value={newProtocol.description}
                  placeholder='Enter Description'
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className=" flex space-x-2 mt-8">
          <button
            type="button"
            onClick={() => closeModal('create')}
            className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50  sm:text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
           
            className="w-1/2 inline-flex justify-center rounded-md text-gray-700 bg-[#F6F8FB] px-4 py-2 text-base font-medium shadow-sm sm:text-sm hover:bg-gradient-to-r hover:from-[#FE512E] hover:to-[#F09619] hover:text-white"
            style={{
              transition: "background 0.3s ease",
            }}
          >
            Save
          </button>
        </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Edit Security Protocol</h2>
            <hr className="border-[#F4F4F4] mb-4 mt-4" />
            <form onSubmit={handleEditProtocol}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="edit-title">Title<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="edit-title"
                  name="title"
                  value={newProtocol.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="edit-description">Description<span className="text-red-500">*</span></label>
                <textarea
                  id="edit-description"
                  name="description"
                  value={newProtocol.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="edit-date">Date<span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    id="edit-date"
                    name="date"
                    value={newProtocol.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="edit-time">Time<span className="text-red-500">*</span></label>
                  <input
                    type="time"
                    id="edit-time"
                    name="time"
                    value={newProtocol.time}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              
              <div className="flex space-x-2 mt-8">
          <button
            type="button"
            onClick={() => closeModal('edit')} 
            className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50  sm:text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
           
            className="w-1/2 inline-flex justify-center rounded-md text-gray-700 px-4 py-2 text-white font-medium shadow-sm   sm:text-sm bg-gradient-to-r from-[#FE512E] to-[#F09619] "
            style={{
              transition: "background 0.3s ease",
            }}
          >
            Save
          </button>
        </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && selectedProtocol && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
          <div className="flex justify-between items-center mb-4">
          {/* Title Styling */}
          <h3 className="text-xl font-semibold text-gray-900">View Security Protocol</h3>
          <FaTimes 
            onClick={() => closeModal('view')} 
            className="text-gray-500 cursor-pointer" 
            size={18} 
          />
        </div>
        <hr className="border-[#F4F4F4] mb-4" />
           

            <div className="mb-4">
              <h3 className="text-sm font-medium mb-1 text-[#a7a7a7]">Title</h3>
              <p className='text-[#202224]'>{selectedProtocol.title}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-1 text-[#a7a7a7]">Description</h3>
              <p className='text-[#202224]'>{selectedProtocol.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-medium mb-1 text-[#a7a7a7]">Date</h3>
                <p className='text-[#202224]'>{selectedProtocol.date}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1 text-[#a7a7a7]">Time</h3>
                <p className='text-[#202224]'>{selectedProtocol.time}</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Delete Protocol?</h2>
            <hr className="border-[#F4F4F4] mb-4 mt-4" />

            <p className="mb-4">Are you sure you want to delete this Protocol?</p>
            <div className="flex space-x-2 mt-8">
              <button
                type="button"
                onClick={() => closeModal('delete')} 
                className="w-1/2 inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  sm:text-sm"
              >
                Cancel
              </button>
              <button
              onClick={handleDeleteProtocol}
                type="button"
                className="w-1/2 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-smsm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
  </main>
  </div>
 
  )
}