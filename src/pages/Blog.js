import React, { useState } from "react";

const MAX_PREVIEW_LENGTH = 180; // characters before truncating

const posts = [
  {
    title: "Welcome to my personal portfolio website!",
    date: "2025-06-16",
    content:
      "Thank you for visiting my portfolio! Here, you can explore my projects, professional experience, and blog posts. I built this site using React and Tailwind CSS to showcase my work and share my journey as a developer. Feel free to browse around and connect with me if you'd like to collaborate or just say hi!",
    // images: [require("../assets/images/")],
    // videos: [],
  },
];

const BlogCard = ({ post }) => {
  const [showMore, setShowMore] = useState(false);
  const isLong = post.content.length > MAX_PREVIEW_LENGTH;
  const preview = isLong && !showMore ? post.content.slice(0, MAX_PREVIEW_LENGTH) + "..." : post.content;

  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col hover:scale-[1.025] transition-transform duration-300 border border-gray-800 min-h-[420px]"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-block bg-teal-400/10 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">
          {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">
        {post.title}
      </h3>
      <div className="text-gray-400 mb-4 text-base leading-relaxed">
        {preview}
        {isLong && (
          <button
            className="ml-2 text-teal-300 hover:underline text-sm font-medium focus:outline-none"
            onClick={() => setShowMore((v) => !v)}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      {post.images && post.images.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-4 justify-center">
          {post.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Blog visual"
              className="w-48 h-48 object-cover rounded-xl border-2 border-teal-400 shadow-lg"
            />
          ))}
        </div>
      )}
      {post.videos && post.videos.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center">
          {post.videos.map((vid, i) => (
            <div key={i} className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-teal-400">
              <iframe
                src={vid}
                title={`Blog video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 rounded-xl"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Blog = () => (
  <section className="container mx-auto px-4 py-16 min-h-screen">
    <h2 className="text-4xl font-extrabold text-center text-teal-400 mb-12 tracking-tight drop-shadow-lg">
      Blog
    </h2>
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, idx) => (
        <BlogCard key={idx} post={post} />
      ))}
    </div>
  </section>
);

export default Blog;
