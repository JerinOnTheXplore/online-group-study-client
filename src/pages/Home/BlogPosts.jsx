// BlogPosts.jsx
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How to Organize an Effective Group Study Session 📚",
    excerpt:
      "Learn the best tips and tricks to plan and run a productive group study that keeps everyone motivated.",
    date: "2025-08-10",
  },
  {
    id: 2,
    title: "Top 5 Tools to Boost Your Group Study Experience 🛠️",
    excerpt:
      "Explore popular digital tools and apps that can help you collaborate better and study smarter together.",
    date: "2025-08-08",
  },
  {
    id: 3,
    title: "Managing Time Efficiently in Group Projects ⏰",
    excerpt:
      "Master time management skills to ensure your group project runs smoothly and meets deadlines.",
    date: "2025-08-05",
  },
];

const BlogPosts = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white rounded shadow-lg my-10">
      <h2 className="text-3xl font-bold mb-8 text-emerald-700 text-center">📝 Group Study Blog Posts</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(({ id, title, excerpt, date }) => (
          <article
            key={id}
            className="border border-emerald-300 rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 text-emerald-800">{title}</h3>
            <p className="text-gray-700 mb-4">{excerpt}</p>
            <time className="text-sm text-emerald-500">{new Date(date).toLocaleDateString()}</time>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
