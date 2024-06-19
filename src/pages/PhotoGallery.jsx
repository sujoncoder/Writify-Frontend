// src/components/PhotoGallery.js
import React from 'react';

const photos = [
  {
    src: "https://images.unsplash.com/photo-1532722401526-063f56a8e64b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Woman with hat",
    link: "https://www.instagram.com/p/example1/"
  },
  {
    src: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Book with plant",
    link: "https://www.instagram.com/p/example2/"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1682771540974-19a70db33e1e?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Plant with shadow",
    link: "https://www.instagram.com/p/example3/"
  },
  {
    src: "https://images.unsplash.com/photo-1520365451528-b2a9445fc3bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Woman in red jacket",
    link: "https://www.instagram.com/p/example4/"
  },
  {
    src: "https://images.unsplash.com/photo-1520869309377-88c9274a27c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bench outside house",
    link: "https://www.instagram.com/p/example5/"
  },
  {
    src: "https://images.unsplash.com/photo-1622414689593-e01e5485e431?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Man drinking coffee",
    link: "https://www.instagram.com/p/example6/"
  },
  {
    src: "https://images.unsplash.com/photo-1484981184820-2e84ea0af397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Man holding calendar",
    link: "https://www.instagram.com/p/example7/"
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHRlY2h8ZW58MHx8fHwxNjI1OTM2NTgx&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Pink building",
    link: "https://www.instagram.com/p/example8/"
  },
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-start mb-8 w-full sm:w-2/3 md:w-2/3 ">Follow Us on Instagram</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <a href={photo.link} key={index} target="_blank" rel="noopener noreferrer">
            <div className="relative">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View on Instagram</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
