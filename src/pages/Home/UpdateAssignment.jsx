import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...assignment });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(pre => ({ ...pre, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { title, thumbnail, marks } = formData;
    const { _id, ...updatedData } = formData;

    if (!title.trim() || title.trim().length < 5) {
      return Swal.fire('Invalid Title', 'Title must be at least 5 characters long.', 'warning');
    }

    if (isNaN(marks) || parseInt(marks) <= 0) {
      return Swal.fire('Invalid Marks', 'Marks should be a positive number.', 'warning');
    }

    const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;
    if (!urlPattern.test(thumbnail.trim())) {
      return Swal.fire('Invalid URL', 'Please enter a valid thumbnail URL.', 'warning');
    }

    const res = await fetch(`https://online-group-study-server-delta.vercel.app/assignments/${assignment._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Assignment updated successfully!',
        timer: 1500,
        showConfirmButton: false
      });
      navigate('/assignments');
    } else {
      const err = await res.json();
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: err.message || 'Something went wrong!'
      });
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto bg-white rounded shadow-lg">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8">Update Assignment</h2>
        <form onSubmit={handleUpdate} className="space-y-5">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full p-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Thumbnail URL"
            required
          />
          <textarea
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            className="w-full p-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Objective"
            required
            rows={4}
          />
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            className="w-full p-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Marks"
            required
          />
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-3 border border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
          >
            Update Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
