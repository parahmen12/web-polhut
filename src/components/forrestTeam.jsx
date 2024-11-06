import React from 'react';
import Marquee from 'react-fast-marquee';
import "../index.css";
import { useForrestTeam } from '../hooks/useAPi';

const ForrestTeam = () => {
  const { aparatus, loading, error } = useForrestTeam();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section
      id="forrestTeam"
      className="py-10 overflow-hidden relative"
      style={{
        backgroundImage: "url('https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/18/gede-pangrango_633111986-3578964124.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-5">
          Tim Polisi Kehutanan
        </h2>
        <p className="text-center text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
          Kami adalah tim yang berdedikasi dalam menjaga dan melindungi hutan serta sumber daya alam hayati.
        </p>
        
        {/* Marquee component for scrolling content */}
        <Marquee 
          speed={100} 
          pauseOnHover={true}
        >
          {Array.isArray(aparatus) && aparatus.map((aparat, index) => (
            <div
              key={aparat.guid}
              className="
             bg-white
               bg-opacity-90
               rounded-lg
               shadow-lg p-4 m-2
               transform hover:scale-105
               transition duration-300
               flex flex-col
               items-center
               md:py-8
               "
            >
              <img
                    src={`https://bucket-2.nos.wjv-1.neo.id/${aparat.file}`}
                    onError={(e) => (e.target.src = "https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-police-man-icon-simple-vector-png-image_4956237.png")} // Mengambil URL gambar dari API
                    alt={`Team ${index + 1}`}
                    className="w-24 h-24 rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {aparat.name}
              </h3>
              <p className="text-center text-sm text-gray-600">
                {aparat.position}
              </p>
              <p className="mt-2 text-center text-gray-700 text-sm">
                Bertugas menjaga kelestarian hutan dan melindungi lingkungan dari kegiatan ilegal.
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ForrestTeam;
