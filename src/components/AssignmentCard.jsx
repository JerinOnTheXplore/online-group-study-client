import React from 'react';
import { Link } from 'react-router';

const AssignmentCard = ({assignment,index}) => {
  const { thumbnail, title, marks, difficulty, objective } = assignment;
   const colors = [
    'bg-purple-100 text-purple-900',
    'bg-pink-100 text-pink-900',
    'bg-blue-100 text-blue-900',
  ];

  const getAosType = (i) => {
    if (i % 3 === 0) return 'fade-right';
    if (i % 3 === 1) return 'fade-up';
    return 'fade-left';
  };
    return (
        <div>
         <div
      className={`rounded-2xl shadow-xl p-4 ${colors[index % 3]}`}
      data-aos={getAosType(index)}
    >
      <img src={thumbnail} alt={title} className="rounded-lg w-full h-32 object-cover" />
      <div className="mt-3 space-y-1">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{objective}</p>
        <div className="text-sm flex justify-between items-center mt-2 font-semibold">
          <span>Marks: {marks}</span>
          <span>Level: {difficulty}</span>
        </div>
      </div>
      <div className="mt-3 flex justify-between text-sm font-medium">
        <Link to={`/assignments/${assignment._id}`} className="text-purple-700">View</Link>
        <Link className="text-pink-700">Update</Link>
        <Link className="text-red-500">Delete</Link>
      </div>
    </div>   
        </div>
    );
};

export default AssignmentCard;