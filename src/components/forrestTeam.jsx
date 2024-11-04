import React, { useEffect, useState } from 'react';

const ForrestTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6&nat=us'); // Get 6 members
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        if (prevOffset <= -100 * (teamMembers.length - 1)) {
          return 0; // Reset to start
        }
        return prevOffset - 100; // Move left by 100%
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [teamMembers]);

  return (
    <section
      id="forrestTeam"
      className="py-10 overflow-hidden relative"
      style={{
        backgroundImage: "url('https://ksdae.menlhk.go.id/assets/news/FC810B83-67A4-4399-BAB8-A7D95B1B9425.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Konten utama */}
      <div className="container px-4 md:px-6 relative z-10 mr-20">
        <h2 className="text-3xl font-semibold text-center text-white mb-5">Tim Polisi Kehutanan</h2>
        <p className="text-center text-base text-gray-200 mb-6 max-w-2xl mx-auto">
          Kami adalah tim yang berdedikasi dalam menjaga dan melindungi hutan serta sumber daya alam hayati.
        </p>
        
        <div className="marquee-wrapper overflow-hidden">
          <div
            className="marquee-content flex"
            style={{
              transform: `translateX(${offset}%)`,
              transition: 'transform 1s ease-in-out',
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 rounded-lg shadow p-3 m-2 transform hover:scale-105 transition duration-300 min-w-[150px]"
              >
                <img
                  src={member.picture.large}
                  alt={member.name.first}
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
                <h3 className="text-md font-semibold text-gray-800 text-center">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-center text-xs text-gray-600">
                  {member.location.city}, {member.location.country}
                </p>
                <p className="mt-2 text-center text-gray-700 text-xs">
                  Bertugas menjaga kelestarian hutan dan melindungi lingkungan dari kegiatan ilegal.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForrestTeam;
