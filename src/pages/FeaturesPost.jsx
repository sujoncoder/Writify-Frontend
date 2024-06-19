// src/components/FeaturedPosts.js
import React from 'react';

const FeaturedPosts = () => {
  const posts = [
    {
      title: "Discover the Secrets of a Productive Morning Routine",
      description: "Start your day right with these simple yet effective tips to boost your productivity.",
      imageUrl: "https://images.pexels.com/photos/5710032/pexels-photo-5710032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/post/1"
    },
    {
      title: "The Ultimate Guide to Healthy Eating",
      description: "Learn how to create balanced meals and maintain a healthy lifestyle effortlessly.",
      imageUrl: "https://images.pexels.com/photos/1156616/pexels-photo-1156616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/post/2"
    },
    {
      title: "Exploring the Great Outdoors: Tips for a Successful Hiking Trip",
      description: "Everything you need to know for a safe and enjoyable hiking adventure.",
      imageUrl: "https://images.pexels.com/photos/1005424/pexels-photo-1005424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      link: "/post/3"
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-start mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:scale-105">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <a href={post.link} className="text-teal-500 hover:text-teal-600">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
