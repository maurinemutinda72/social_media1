import React from "react";

const NewsFeed = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding Cloud Computing",
      content: "Cloud computing is revolutionizing the way we store and access data. It provides scalable resources and services over the internet, making it easier for businesses and individuals to manage their workloads.",
      image: "https://euro-systems.co.uk/wp-content/uploads/2024/09/Cloud-Computing-History-1.png",
    },
  ];

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h3>{post.title}</h3>
            <img
              src={post.image}
              alt={post.title}
              className="post-image"
            />
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
