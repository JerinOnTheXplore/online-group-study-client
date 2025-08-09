import React, { useContext } from "react";
import { Link } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthContext";

const AssignmentCard = ({ assignment, index, setAssignments }) => {
  const { user } = useContext(AuthContext);
  const { thumbnail, title, marks, difficulty, objective, _id, createEmail } =
    assignment;

  const handleDelete = async () => {
    if (!user || user.email !== createEmail) {
      Swal.fire(
        "Unauthorized",
        "You must be the creator to delete this assignment.",
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
          data.message || "You are not authorized to delete this.",
          "error"
        );
      }
    }
  };

  return (
    <div className="bg-stone-100 rounded shadow-md p-4 flex flex-col h-full border border-emerald-200">
      <img
        src={thumbnail}
        alt={title}
        className="rounded w-full h-32 object-cover"
      />
      <h2 className="text-lg font-bold mt-3 text-emerald-700">{title}</h2>
      <p className="text-sm text-gray-600">{objective}</p>
      <div className="text-sm mt-2 font-semibold flex justify-between">
        <span>Marks: {marks}</span>
        <span>Level: {difficulty}</span>
      </div>
      <div className="mt-3 flex justify-between text-sm font-medium">
        <Link
          to={`/assignments/${_id}`}
          className="text-emerald-600 hover:underline"
        >
          View
        </Link>
        {user?.email === createEmail ? (
          <>
            <Link
              to={`/assignments/update/${_id}`}
              className="text-blue-600 hover:underline"
            >
              Update
            </Link>
            <button
              onClick={handleDelete}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <span
              className="text-gray-400 cursor-not-allowed"
              title="Only the creator can update this."
            >
              Update
            </span>
            <span
              className="text-gray-400 cursor-not-allowed"
              title="Only the creator can delete this."
            >
              Delete
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
