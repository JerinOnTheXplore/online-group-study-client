import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [dueDate, setDueDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const description = form.description.value.trim();
    const marks = parseInt(form.marks.value);
    const thumbnail = form.thumbnail.value;
    const difficulty = form.difficulty.value;

    if (title.length < 5) {
      return Swal.fire('Error', 'Title must be at least 5 characters.', 'error');
    }

    if (description.length < 20) {
      return Swal.fire('Error', 'Description must be at least 20 characters.', 'error');
    }

    if (isNaN(marks) || marks <= 0) {
      return Swal.fire('Error', 'Marks must be a positive number.', 'error');
    }

    const newAssignment = {
      title,
      description,
      marks,
      thumbnail,
      difficulty,
      dueDate,
      createEmail: user?.email,
    };

    const res = await fetch("https://online-group-study-server-delta.vercel.app/assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
    <div className="min-h-screen flex items-center justify-center px-4 pt-36 pb-24">
      <div className="max-w-7xl w-full bg-white gray-100 p-8 rounded shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-700">Create Assignment</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input input-bordered w-full border-emerald-300 focus:border-emerald-500 text-emerald-700"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full border-emerald-300 focus:border-emerald-500 text-emerald-700"
            required
          ></textarea>
          <input
            type="number"
            name="marks"
            placeholder="Marks"
            className="input input-bordered w-full border-emerald-300 focus:border-emerald-500 text-emerald-700"
            required
          />
          <input
            type="text"
            name="thumbnail"
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full border-emerald-300 focus:border-emerald-500 text-emerald-700"
            required
          />
          <select
            name="difficulty"
            className="select select-bordered w-full border-emerald-300 focus:border-emerald-500 text-emerald-700"
            required
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <div>
            <label className="block mb-2 font-medium text-emerald-700">Due Date:</label>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className="input input-bordered w-full border-emerald-300 focus:border-emerald-500 text-emerald-700"
              required
            />
          </div>
          <button
            type="submit"
            className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full font-semibold text-xl transition"
          >
            Create Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
