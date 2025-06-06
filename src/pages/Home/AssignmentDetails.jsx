import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router';

const AssignmentDetails = () => {
 const assignment = useLoaderData();
  const navigate = useNavigate();

    return (
        <div className='bg-gradient-to-r from-purple-500 to-cyan-500'>
        <div className="max-w-4xl mx-auto px-4 py-10 pt-40">
      {/* header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 rounded-t-3xl text-white shadow-xl p-6 text-center">
        <h2 className="text-3xl font-bold">{assignment.title}</h2>
        <p className="mt-1 text-md italic">{assignment.objective}</p>
      </div>

      {/* assignment details card */}
      <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 rounded-b-3xl shadow-xl p-6 space-y-5 border-t-0">
        <img
          src={assignment.thumbnail}
          alt={assignment.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-purple-700">Description</h3>
            <p>{assignment.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-pink-700">Instructor</h3>
            <p>{assignment.instructor}</p>
            <p className="mt-2 text-sm text-gray-500">Due Date: {assignment.dueDate}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 text-sm font-medium">
          <span className="bg-purple-100 text-purple-900 px-3 py-1 rounded-full">
            Marks: {assignment.marks}
          </span>
          <span className="bg-pink-100 text-pink-900 px-3 py-1 rounded-full">
            Difficulty: {assignment.difficulty}
          </span>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition-transform"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    </div>    
        </div>
    );
};

export default AssignmentDetails;