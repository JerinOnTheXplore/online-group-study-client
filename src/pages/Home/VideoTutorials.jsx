// Tutorials.jsx
import React from "react";

const videoTutorials = [
  {
    id: 1,
    title: "Effective Group Study Techniques 🤝📚",
    description:
      "Learn proven strategies to boost productivity and collaboration in your group study sessions.",
    videoUrl: "https://www.youtube.com/embed/TjPFZaMe2yw",
  },
  {
    id: 2,
    title: "How to Optimize Group Study Sessions 📝✨",
    description:
      "Step-by-step guide on setting up and running an effective study group for better learning outcomes.",
    videoUrl: "https://www.youtube.com/embed/iu4Q_DZZcZY",
  },
];

const VideoTutorials = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white p-8 rounded shadow-lg my-10">
      <h2 className="text-3xl font-bold mb-6 text-emerald-700 text-center">
        🎥 Video Tutorials & Group Study Ideas
      </h2>
      <p className="mb-8 text-center text-gray-700 max-w-2xl mx-auto">
      Enhance your learning experience with these insightful group study tutorials. Whether you're new to group discussions or want to improve collaboration skills, these videos offer practical tips to study smarter together.
</p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {videoTutorials.map(({ id, title, description, videoUrl }) => (
          <div key={id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoTutorials;
