import React, { useState, useEffect } from 'react';
import { useForrestActivities } from '../hooks/useAPi';

const ForrestActivities = () => {
  const { activities, loading, error } = useForrestActivities();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === activities.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide otomatis setiap 3 detik
    return () => clearInterval(interval);
  }, [activities.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
      {/* Bagian Kiri - Judul */}
      <div className="w-full md:w-1/3 flex-shrink-0 md:mt-20 md:mx-10">
        <h2 className="text-3xl font-bold text-center md:text-left mb-4">Aktivitas di Hutan</h2>
        <hr className="border-t-2 border-green-500 w-16 mb-6 mx-auto md:mx-0" />
        <p className="text-gray-600 text-center md:text-left">Berbagai aktivitas yang dilakukan untuk menjaga dan melestarikan hutan kita.</p>
      </div>

      {/* Garis Tengah */}
      <div className="hidden md:block border-l-2 border-gray-300 h-full mx-6 "></div>

      {/* Bagian Kanan - Data Aktivitas */}
      <div className="w-full md:w-2/3 flex items-center relative md:mx-10">
        {Array.isArray(activities) && activities.length > 0 && (
          <div className="w-full flex-shrink-0 transition-transform duration-500 transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden w-full"
                style={{ width: '100%' }}
              >
                <img
                  src={activity.file ? `https://bucket-2.nos.wjv-1.neo.id/${activity.file}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QjtiRXSUx_LQ0uo5ddQjsHqT1l-_59_0eA&s"}
                  alt={activity.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-2">{activity.description}</p>
                  <span className="text-sm text-gray-500">Admin: {activity.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForrestActivities;
