import { div } from 'motion/react-client';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';

const CreateAssignment = () => {
 const {user} = useContext(AuthContext);
 const [dueDate, setDueDate] = useState(new Date());
 const navigate = useNavigate();
 const handleSubmit = async (e)=>{
   e.preventDefault();
   const form = e.target;
   const title = form.title.value;
   const description = form.description.value;
   const marks = form.marks.value;
   const thumbnail = form.thumbnail.value;
   const difficulty = form.difficulty.value;

  const newAssignment = {
    title,
    description,
    marks: parseInt(marks),
    thumbnail,
    difficulty,
    dueDate,
    createEmail: user?.email,
  };

  const res = await fetch("http://localhost:3000/assignments",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newAssignment),
  });
  const data = await res.json();

  if (data.insertedId || data.acknowledged) {
     Swal.fire({
        icon: "success",
        title: "Assignment Created!",
        showConfirmButton: false,
        timer: 1500,
      });
    navigate("/assignments");
  }
 };
    return (
      <div className='min-h-screen bg-gradient-to-r from-purple-400 to-cyan-500 flex items-center justify-center px-4'>
        <div className="max-w-3xl mx-auto mt-36 mb-24 p-6  shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Create Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>
        <input type="number" name="marks" placeholder="Marks" className="input input-bordered w-full" required />
        <input type="text" name="thumbnail" placeholder="Thumbnail Image URL" className="input input-bordered w-full" required />

        <select name="difficulty" className="select select-bordered w-full" required>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <div>
          <label className="block mb-2 font-medium">Due Date:</label>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            className="input input-bordered w-full"
            required
          />
        </div>

        <button type="submit" className="btn bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white w-full font-semibold text-xl">
          Create Assignment
        </button>
      </form>
    </div>    
        </div>
    );
};

export default CreateAssignment;