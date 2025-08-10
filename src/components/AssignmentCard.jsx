import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContext";

const AssignmentCard = ({ assignment, index, setAssignments }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { thumbnail, title, marks, difficulty, objective, _id, createEmail } =
    assignment;

  const handleDelete = async () => {
    if (!user || user.email !== createEmail) {
      Swal.fire(
        "Unauthorized",
        "You are not the creator of this assignment.",
        "error"
      );
      return;
    }

    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this assignment!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await fetch(
        `https://online-group-study-server-delta.vercel.app/assignments/${_id}?userEmail=${user.email}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (res.ok) {
        Swal.fire("Deleted!", "Assignment has been deleted.", "success");
        setAssignments((prev) => prev.filter((a) => a._id !== _id));
      } else {
        Swal.fire(
          "Error!",
          data.message || "Failed to delete the assignment.",
          "error"
        );
      }
    }
  };

  const handleUpdate = () => {
    if (!user) {
      Swal.fire(
        "Login Required",
        "Please login to update assignments.",
        "warning"
      );
      return;
    }
    navigate(`/assignments/update/${_id}`);
  };

  return (
    <div className="bg-stone-100 rounded shadow-md  flex flex-col h-full border border-emerald-200">
      <img
        src={thumbnail}
        alt={title}
        className="rounded w-full h-32 object-cover"
      />
      <h2 className="text-xl md:text-lg font-medium mt-3 p-4 text-emerald-700">{title}</h2>
      <p className="text-sm text-gray-600 p-4">{objective}</p>
      <div className="text-sm mt-2 font-semibold flex justify-between p-4">
        <span>Marks: {marks}</span>
        <span>Level: {difficulty}</span>
      </div>
      <div className="mt-3 flex justify-center gap-2 text-xs md:text-sm font-normal px-5 py-4">
        <Link
          to={`/assignments/${_id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-emerald-600 hover:underline"
        >
          View
        </Link>
        <button
          onClick={handleUpdate}
          className="text-blue-600 hover:underline"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssignmentCard;
