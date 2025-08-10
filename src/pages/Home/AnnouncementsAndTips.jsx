import React from "react";

const studyTipsData = [
  {
    id: 1,
    type: "Tip",
    content: "Plan your study schedule and stick to it consistently.",
  },
  {
    id: 2,
    type: "Motivation",
    content: "Success is the sum of small efforts repeated day in and day out.",
  },
  {
    id: 3,
    type: "Announcement",
    content: "Next group study session will be on Friday at 5 PM via Zoom.",
  },
  {
    id: 4,
    type: "Tip",
    content: "Take short breaks during study to improve concentration.",
  },
  {
    id: 5,
    type: "Motivation",
    content: "Don’t watch the clock; do what it does. Keep going.",
  },
  {
    id: 6,
    type: "Announcement",
    content: "New assignments for the biology group are now available.",
  },
];

const AnnouncementsAndTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-20 text-emerald-600 text-center">
        Announcements & Study Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {studyTipsData.map(({ id, type, content }) => (
          <div
            key={id}
            className={`border rounded-lg p-5 shadow-md hover:shadow-lg transition
            ${
              type === "Announcement"
                ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                : type === "Tip"
                ? "border-green-400 bg-green-50 text-green-800"
                : "border-emerald-400 bg-emerald-50 text-emerald-800"
            }`}
          >
            <h3 className="font-semibold mb-2 capitalize">{type}</h3>
            <p className="text-sm">{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnnouncementsAndTips;
