import React, { useState } from "react";
import { BsFillGrid3X3GapFill, BsFillGrid3X3GapFill as Grid4 } from "react-icons/bs"; 
import AssignmentCard from "./AssignmentCard";

const AssignmentList = ({ assignments, setAssignments }) => {
  const [gridCols, setGridCols] = useState(3);
  const [showCount, setShowCount] = useState(6);
  const [sortType, setSortType] = useState("latest");

  const sortedAssignments = [...assignments].sort((a, b) => {
    if (sortType === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });

  const visibleAssignments = sortedAssignments.slice(0, showCount);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Top Navbar */}
      <div className="bg-emerald-50 flex justify-between items-center p-3 rounded-lg mb-6">
        <div className="flex items-center gap-2">
          <label className="text-emerald-800 font-medium">Sort by:</label>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border border-emerald-300 rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="latest">Latest</option>
          </select>
        </div>

        {/* Grid toggle - hidden in mobile */}
        <div className="hidden md:flex items-center gap-3 text-emerald-700">
          <button
            onClick={() => {
              setGridCols(3);
              setShowCount(6);
            }}
            className={`p-2 rounded ${gridCols === 3 ? "bg-emerald-200" : "hover:bg-emerald-100"}`}
          >
            <BsFillGrid3X3GapFill size={18} />
          </button>
          <button
            onClick={() => {
              setGridCols(4);
              setShowCount(8);
            }}
            className={`p-2 rounded ${gridCols === 4 ? "bg-emerald-200" : "hover:bg-emerald-100"}`}
          >
            <Grid4 size={18} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCols} gap-6`}>
        {visibleAssignments.map((assignment, index) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            index={index}
            setAssignments={setAssignments}
          />
        ))}
      </div>

      {/* Show More Button */}
      {showCount < assignments.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowCount(showCount + (gridCols === 3 ? 6 : 8))}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignmentList;
