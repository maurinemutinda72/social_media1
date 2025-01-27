import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      setComments([...comments, { name, message }]);
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="comments">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}:</strong> {comment.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
