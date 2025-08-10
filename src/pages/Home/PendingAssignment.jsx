import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const PendingAssignment = () => {
  const { user } = useContext(AuthContext);
  const [pending, setPending] = useState([]);
  const [selected, setSelected] = useState(null);
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    fetch('https://online-group-study-server-delta.vercel.app/all-pending-submissions', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        const filtered = data;
        setPending(filtered);

        const assignmentIds = [...new Set(filtered.map(item => item.assignmentId))];
        Promise.all(
          assignmentIds.map(id =>
            fetch(`https://online-group-study-server-delta.vercel.app/assignments/${id}`).then(res => res.json())
          )
        ).then(results => {
          const map = {};
          results.forEach(a => (map[a._id] = a));
          setAssignments(map);
        });
      });
  }, [user?.email]);

  const handleMarkSubmit = (e) => {
    e.preventDefault();

    fetch(`https://online-group-study-server-delta.vercel.app/submitted-assignments/mark/${selected._id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        obtainedMarks: marks,
        feedback
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('You cannot mark your own submission');
        }
        return res.json();
      })
      .then(() => {
        Swal.fire('Marked!', 'The assignment has been marked.', 'success');
        setSelected(null);
        setMarks('');
        setFeedback('');
        setPending(prev => prev.filter(p => p._id !== selected._id));
      })
      .catch(err => {
        Swal.fire('Error!', err.message, 'error');
      });
  };

  return (
    <div className="min-h-screen pt-36 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
          Pending Assignments
        </h2>

        {pending.length === 0 ? (
          <p className="text-emerald-700 text-center">
            No pending assignments to evaluate.
          </p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow border border-emerald-200">
            <table className="w-full table-auto">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Marks</th>
                  <th className="px-4 py-2">Examinee</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {pending.map(sub => (
                  <tr key={sub._id} className="even:bg-emerald-50">
                    <td className="border px-4 py-2 text-emerald-800">{assignments[sub.assignmentId]?.title || 'N/A'}</td>
                    <td className="border px-4 py-2 text-center text-emerald-800">{assignments[sub.assignmentId]?.marks}</td>
                    <td className="border px-4 py-2 text-center text-emerald-800">{sub.userEmail}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => setSelected(sub)}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded transition"
                      >
                        Give Mark
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-xl font-bold mb-4 text-emerald-700">Evaluate Submission</h3>
              <p className="mb-2">
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline"
                >
                  View Google Docs
                </a>
              </p>
              <p className="mb-4 text-emerald-800"><strong>Note:</strong> {selected.note}</p>

              <input
                type="number"
                placeholder="Give marks"
                value={marks}
                onChange={e => setMarks(e.target.value)}
                className="w-full border p-2 rounded mb-3 text-emerald-800 focus:border-emerald-500 outline-none"
              />
              <textarea
                placeholder="Give feedback"
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                className="w-full border p-2 rounded mb-3 text-emerald-800 focus:border-emerald-500 outline-none"
              ></textarea>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setSelected(null)}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleMarkSubmit}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingAssignment;
