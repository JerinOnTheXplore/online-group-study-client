import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import Loading from '../Loading';

const MySubmission = () => {
  const { user, loading } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  const [assignmentMap, setAssignmentMap] = useState({});

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://online-group-study-server-delta.vercel.app/submitted-assignments?email=${user.email}`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(subs => {
        setSubmissions(subs);

        const ids = subs.map(s => s.assignmentId);
        const uniqueIds = [...new Set(ids)];

        return Promise.all(
          uniqueIds.map(id =>
            fetch(`https://online-group-study-server-delta.vercel.app/assignments/${id}`).then(res => res.json())
          )
        );
      })
      .then(assignments => {
        const map = {};
        assignments.forEach(a => {
          if (a?._id) {
            map[a._id] = a;
          }
        });
        setAssignmentMap(map);
      })
      .catch(err => console.error(err));
  }, [user?.email]);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="pt-36 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 pb-12 pt-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-emerald-700">My Submitted Assignments</h2>

          {submissions.length === 0 ? (
            <p className="text-center text-emerald-700 py-10">You haven't submitted any assignments yet.</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded shadow-lg">
              <table className="w-full table-auto">
                <thead className="bg-emerald-700 text-white">
                  <tr>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Submitted At</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Total Marks</th>
                    <th className="px-4 py-2">Your Marks</th>
                    <th className="px-4 py-2">Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map(s => {
                    const a = assignmentMap[s.assignmentId] || {};
                    return (
                      <tr key={s._id} className="even:bg-emerald-100">
                        <td className="border px-4 py-2 text-emerald-800">{a.title || 'Unknown Assignment'}</td>
                        <td className="border px-4 py-2 text-emerald-800">
                          {new Date(s.submittedAt).toLocaleDateString()}
                        </td>
                        <td className="border px-4 py-2 capitalize text-emerald-800">{s.status}</td>
                        <td className="border px-4 py-2 text-center text-emerald-800">{a.marks ?? '-'}</td>
                        <td className="border px-4 py-2 text-center text-emerald-800">{s.obtainedMarks ?? '-'}</td>
                        <td className="border px-4 py-2 text-emerald-800">{s.feedback ?? '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MySubmission;
