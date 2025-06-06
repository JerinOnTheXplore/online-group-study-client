import React, { use, useState } from 'react';
import AssignmentCard from '../../components/AssignmentCard';

const Assignments = ({assignmentsPromise}) => {
  const assignments = use(assignmentsPromise);
  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState('All');

  const sortedAssignments = assignments
    .filter(a => sortOrder === 'All' || a.difficulty === sortOrder)
    .sort((a, b) => a.marks - b.marks);

  const displayAssignments = !showAll
  ? sortedAssignments.slice(0, 5)
  : sortedAssignments;
    return (
        <div>
        <div className="px-4 py-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Assignments</h2>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
  {displayAssignments.map((assignment, i) => (
    <div
      key={assignment._id}
      className={
        i === 1
          ? 'md:row-span-2'
          : i === 2
          ? 'md:col-span-2'
          : ''
      }
    >
      <AssignmentCard assignment={assignment} index={i} />
    </div>
  ))}
</div>

   <div className="text-center mt-6">
  <button
    onClick={() => setShowAll(!showAll)}
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
  >
    {showAll ? 'Show Less' : 'Show All'}
  </button>
</div>   
    </div>    
        </div>
    );
};

export default Assignments;