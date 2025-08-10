import React, { useContext, useState } from 'react';
import { FaArrowLeft, FaClipboardCheck } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    link: '',
    note: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = {
      assignmentId: assignment._id,
      userEmail: user?.email,
      email: user?.email,
      userName: user?.displayName,
      link: formData.link,
      note: formData.note,
      status: 'pending',
      submittedAt: new Date(),
      obtainedMarks: null,
      feedback: null,
    };

    const res = await fetch('https://online-group-study-server-delta.vercel.app/submitted-assignments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission),
    });
    if (res.ok) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Assignment submitted successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      setShowModal(false);
      setFormData({ link: '', note: '' });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to submit assignment.',
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10 pt-40">
        {/* Header Section */}
        <div className="bg-emerald-500 text-stone-50 rounded-t shadow-xl p-6 text-center">
          <h2 className="text-3xl font-bold">{assignment.title}</h2>
          <p className="mt-1 text-md italic">{assignment.objective}</p>
        </div>

        {/* Details Section */}
        <div className="bg-white text-gray-800 rounded shadow-xl  space-y-5 border-t-0">
          <img
            src={assignment.thumbnail}
            alt={assignment.title}
            className="w-full h-64 object-cover"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div>
              <h3 className="text-xl font-semibold text-emerald-700">Description</h3>
              <p>{assignment.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-800">Instructor</h3>
              <p>{assignment.instructor}</p>
              <p className="mt-2 text-sm text-gray-500">Due Date: {assignment.dueDate}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm font-medium p-4">
            <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
              Marks: {assignment.marks}
            </span>
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-full">
              Difficulty: {assignment.difficulty}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-between flex-wrap gap-2 mt-6 p-4">
            <button
              onClick={() => {
                navigate(-1);
                window.scrollTo({ top: 0, behavior: "smooth" }); 
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              <FaArrowLeft /> Go Back
            </button>

            {user && (
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                <FaClipboardCheck /> Take Assignment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-emerald-200 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Submit Assignment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="url"
                required
                placeholder="Google Docs Link"
                className="w-full px-4 py-2 border font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              />
              <textarea
                placeholder="Quick note"
                className="w-full px-4 py-2 font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
              <button
                type="submit"
                className="w-full py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;
