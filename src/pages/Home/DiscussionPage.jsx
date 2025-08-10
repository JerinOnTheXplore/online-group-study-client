import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const LOCAL_STORAGE_KEY = "discussionComments";

const DiscussionPage = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedComments ? JSON.parse(savedComments) : [];
  });

  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (replyingTo) {
      if (replyText.trim() === "") return;
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === replyingTo
            ? {
                ...comment,
                replies: [
                  ...(comment.replies || []),
                  {
                    id: Date.now(),
                    text: replyText.trim(),
                    username: username.trim() || "Anonymous",
                    createdAt: new Date().toISOString(),
                  },
                ],
              }
            : comment
        )
      );
      setReplyingTo(null);
      setReplyText("");
    } else {
      if (newComment.trim() === "") return;

      const comment = {
        id: Date.now(),
        text: newComment.trim(),
        username: username.trim() || "Anonymous",
        createdAt: new Date().toISOString(),
        replies: [],
      };

      setComments((prev) => [comment, ...prev]);
      setNewComment("");
    }
  };

  const handleDelete = (id, parentId = null) => {
    if (parentId) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.filter((r) => r.id !== id),
              }
            : comment
        )
      );
    } else {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };

  const handleEdit = async (id, parentId = null) => {
    const currentText = parentId
      ? comments.find(c => c.id === parentId)?.replies.find(r => r.id === id)?.text || ""
      : comments.find(c => c.id === id)?.text || "";

    const { value: updatedText } = await Swal.fire({
      title: "Edit your comment",
      input: "textarea",
      inputLabel: "Comment",
      inputPlaceholder: "Type your updated comment here...",
      inputValue: currentText,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value.trim()) {
          return "Comment cannot be empty!";
        }
      },
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d1d5db",
    });

    if (!updatedText) return;

    if (parentId) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.map((r) =>
                  r.id === id ? { ...r, text: updatedText } : r
                ),
              }
            : comment
        )
      );
    } else {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === id ? { ...comment, text: updatedText } : comment
        )
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow-md my-10">
      
      <button
        onClick={() => navigate(-1)} 
        className="mb-6 text-emerald-600 hover:underline font-semibold"
      >
        ← Go Back
      </button>

      <h2 className="text-3xl font-bold mb-6 text-emerald-700 text-center">
        Discussion Forum
      </h2>

      {/* Username input */}
      <input
        type="text"
        placeholder="Your name (optional)"
        className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-emerald-600"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Comment or reply textarea */}
      {replyingTo ? (
        <div className="mb-4 p-3 border-l-4 border-emerald-500 bg-emerald-50 rounded">
          <p className="mb-2 font-semibold text-emerald-700">Replying to comment #{replyingTo}</p>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
            className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-emerald-600"
            rows={3}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleAddComment}
              disabled={replyText.trim() === ""}
              className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition disabled:bg-gray-300"
            >
              Submit Reply
            </button>
            <button
              onClick={() => {
                setReplyingTo(null);
                setReplyText("");
              }}
              className="px-4 py-2 border rounded border-gray-400 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-emerald-600"
            rows={4}
          />
          <button
            onClick={handleAddComment}
            disabled={newComment.trim() === ""}
            className="mt-3 bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition disabled:bg-gray-300"
          >
            Add Comment
          </button>
        </>
      )}

      {/* Comments List */}
      <div className="mt-8 space-y-6">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(({ id, text, username, createdAt, replies }) => (
            <div key={id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center mb-1">
                <div>
                  <span className="font-semibold text-emerald-700">{username || "Anonymous"}</span>{" "}
                  <span className="text-gray-500 text-xs ml-2">{new Date(createdAt).toLocaleString()}</span>
                </div>
                <div className="flex gap-3 text-sm text-gray-600">
                  <button onClick={() => setReplyingTo(id)} className="hover:text-emerald-700">Reply</button>
                  <button onClick={() => handleEdit(id)} className="hover:text-blue-600">Edit</button>
                  <button onClick={() => handleDelete(id)} className="hover:text-red-600">Delete</button>
                </div>
              </div>
              <p className="pl-1 text-gray-800">{text}</p>

              {/* Replies */}
              {replies && replies.length > 0 && (
                <div className="mt-4 ml-6 border-l-2 border-emerald-300 pl-4 space-y-3">
                  {replies.map(({ id: rid, text: rtext, username: runame, createdAt: rdate }) => (
                    <div key={rid} className="flex justify-between items-start">
                      <div>
                        <span className="font-semibold text-emerald-700">{runame || "Anonymous"}</span>{" "}
                        <span className="text-gray-500 text-xs ml-2">{new Date(rdate).toLocaleString()}</span>
                        <p className="mt-1 text-gray-700">{rtext}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-gray-600 ml-4">
                        <button onClick={() => setReplyingTo(id)} className="hover:text-emerald-700 self-start">Reply</button>
                        <button onClick={() => handleEdit(rid, id)} className="hover:text-blue-600 self-start">Edit</button>
                        <button onClick={() => handleDelete(rid, id)} className="hover:text-red-600 self-start">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DiscussionPage;
