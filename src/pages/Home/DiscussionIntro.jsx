import React from "react";
import { useNavigate } from "react-router";

const DiscussionIntro = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto bg-white p-8 rounded shadow-xl my-14 text-center border-1 border-emerald-200">
      <h2 className="text-4xl font-extrabold mb-6 text-emerald-800 tracking-wide drop-shadow-md">
        💬 Join Our Vibrant Discussion Forum!
      </h2>
      <p className="mb-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Unlock the power of collaboration! Whether you have questions, insights, or ideas about your assignments, this is the perfect space to <span className="font-semibold text-emerald-700">engage</span>, <span className="font-semibold text-emerald-700">learn</span>, and <span className="font-semibold text-emerald-700">grow</span> with fellow learners.  
        <br />
        <em className="text-emerald-600 font-medium mt-3 block">
          Your voice matters — share it here!
        </em>
      </p>
      <button
        onClick={() =>{
            navigate("/discussion");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold py-3 px-8 rounded shadow-lg shadow-emerald-300/60 hover:shadow-emerald-500/80"
      >
     Start the Discussion
      </button>
    </section>
  );
};

export default DiscussionIntro;
