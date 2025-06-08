import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
 const assignment = useLoaderData();
 const navigate = useNavigate();
 const [formData, setFormData] = useState({...assignment});

 const handleChange = e =>{
   const {name, value}= e.target;
   setFormData(pre =>({...pre, [name]: value}));
 };

 const handleUpdate = async (e)=>{
   e.preventDefault();
    const { _id, ...updatedData } = formData;
   const res = await fetch(`http://localhost:3000/assignments/${assignment._id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
   });

   if(res.ok){
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
 }
    return (
        <div className='min-h-screen bg-gradient-to-r from-purple-400 to-cyan-500 flex items-center justify-center px-4'>
        <div className="pt-28 pb-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">Update Assignment</h2>
      <form onSubmit={handleUpdate} className="space-y-4 bg-purple-50 p-6 rounded-xl shadow-lg">
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Title" required />
        <input type="text" name="thumbnail" value={formData.thumbnail} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Thumbnail URL" required />
        <textarea name="objective" value={formData.objective} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Objective" required />
        <input type="number" name="marks" value={formData.marks} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Marks" required />
        <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button type="submit" className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
          Update Assignment
        </button>
      </form>
    </div>    
        </div>
    );
};

export default UpdateAssignment;