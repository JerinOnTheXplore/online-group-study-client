import React, { useState } from "react";
import AssignmentCard from "../../components/AssignmentCard";

const Assignments = ({ assignments, setAssignments }) => {
  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by difficulty & search term
  const filteredAssignments = assignments.filter((a) => {
    const matchesDifficulty =
      sortOrder === "All" ||
      a.difficulty?.toLowerCase().trim() === sortOrder.toLowerCase();
    const matchesSearch = a.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  // Sort by date (latest first)
  const sortedAssignments = [...filteredAssignments].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // Show limited cards by default
  const displayAssignments = showAll
    ? sortedAssignments
    : sortedAssignments.slice(0, 8);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
        Assignments
      </h2>

      {/* Sort & Search Navbar */}
      <div className="bg-gray-100 p-3 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mb-6 rounded border border-emerald-200">
        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 bg-white"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full md:w-64 bg-white"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayAssignments.map((assignment, i) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            index={i}
            setAssignments={setAssignments}
          />
        ))}
      </div>

      {/* Show More / Less */}
      {sortedAssignments.length > 8 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Assignments;
