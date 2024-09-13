'use client';

import { useState, useEffect } from 'react';

interface Review {
  text: string;
  photo: string;
  name: string;
  jobTitle: string;
}

const reviews: Review[] = [
  {
    text: 'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.',
    photo: '/Chelsea.png',
    name: 'Chelsea Morgan',
    jobTitle: 'CEO of Subway',
  },
  {
    text: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.',
    photo: '/Nick.png',
    name: 'Nick Cave',
    jobTitle: 'CMD of Nokia',
  },
  {
    text: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.',
    photo: '/Lana.png',
    name: 'Lana Rosenfeld',
    jobTitle: 'Senior VP of Pinterest',
  },
  {
    text: 'Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.',
    photo: '/Giorgio.png',
    name: 'Giorgio Moroder',
    jobTitle: 'CTO of Glovo',
  },
  {
    text: 'Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis. In a laoreet purus.',
    photo: '/young.png',
    name: 'Young Liu',
    jobTitle: 'CAO of Foxconn',
  },
  {
    text: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.',
    photo: '/alexander.jpeg',
    name: 'Alexander Smith',
    jobTitle: 'CMO of Tesla',
  },
];

interface ReviewCarouselProps {
  backgroundMode?: 'light' | 'dark';
}

const ReviewCarousel = ({ backgroundMode = 'light' }: ReviewCarouselProps) => {
  const [itemsVisible, setItemsVisible] = useState(1);

  // Function to get the number of items to show based on window width
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  useEffect(() => {
    // Only execute if window is available
    if (typeof window !== 'undefined') {
      setItemsVisible(getItemsToShow());

      const handleResize = () => setItemsVisible(getItemsToShow());
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const textColor = backgroundMode === 'dark' ? 'text-white' : 'text-black';
  const bgColor = backgroundMode === 'dark' ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`relative max-w-screen-lg mx-auto p-4 overflow-hidden ${bgColor}`}>
      <h2 className={`text-center text-3xl font-bold mb-8 ${textColor}`}>
        What people say about Team
      </h2>
      <div className="relative">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${itemsVisible}, minmax(0, 1fr))`,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 ${bgColor}`}
              style={{ minWidth: '300px' }}
            >
              <div className="flex-grow mb-4 text-center">
                <div className="text-yellow-500 mb-2 flex justify-center">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="transition-transform duration-300 transform hover:scale-125">
                      {star}
                    </span>
                  ))}
                </div>
                <p className={`text-lg font-normal mb-4 ${textColor}`}>{review.text}</p>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 transition-transform transform hover:scale-110">
                  <img src={review.photo} alt={review.name} className="object-cover w-full h-full" />
                </div>
                <div className="text-center">
                  <p className={`text-xl font-semibold ${textColor}`}>{review.name}</p>
                  <p className="text-sm text-gray-500">{review.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
