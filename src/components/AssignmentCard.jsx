import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';

const AssignmentCard = ({assignment,index,setAssignments}) => {
 const {user} = useContext(AuthContext);
  const { thumbnail, title, marks, difficulty, objective,_id,createEmail } = assignment;
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

 const handleDelete = async ()=>{
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover this assignment!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

 if(confirm.isConfirmed){
    const res = await fetch(`http://localhost:3000/assignments/${_id}?userEmail=${user.email}`,{
      method: 'DELETE',  
    });
  const data = await res.json();

  if(res.ok){
    Swal.fire('Deleted!', 'Assignment has been deleted.','success');
    setAssignments((prev)=>prev.filter((a)=>a._id !== _id));
  } else {
    Swal.fire('Error!', data.message ||'You are not authorized to delete this.','error' );
  }
 }
 }
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
        <Link to={`/assignments/update/${assignment._id}`} className="text-pink-700">Update</Link>
        {
         user?.email === createEmail && (
          <button onClick={handleDelete} className="text-red-500">Delete</button>
         )
        }
      </div>
    </div>   
        </div>
    );
};

export default AssignmentCard;