import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // State untuk mengatur apakah menu informasi ditampilkan
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  // Fungsi untuk mengatur tampilan menu informasi
  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <footer className="bg-orange-300 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex flex-col items-center mb-6 md:mb-0 md:w-1/3 text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Lambang_Polhut.png"
              alt="Logo Polhut"
              className="w-28 mb-3 transform transition duration-300 hover:scale-110"
            />
            <h2 className="text-xl font-bold text-gray-800 transition duration-300 hover:text-gray-600">
              Polisi Kehutanan Indonesia
            </h2>
            <p className="text-sm text-gray-900 leading-relaxed max-w-sm mt-2">
              Melindungi hutan demi keberlanjutan sumber daya alam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius debitis quibusdam. Facere, excepturi! Adipisci eos, earum sunt exercitationem pariatur et veniam suscipit, eligendi nulla molestias delectus fuga cumque laudantium!.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:mt-20 md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 cursor-pointer" onClick={toggleInfoVisibility}>
              Informasi
            </h3>
            {/* Menampilkan daftar navigasi hanya jika isInfoVisible adalah true */}
            {isInfoVisible && (
              <ul className="space-y-2 text-gray-800 transition-all duration-300 ease-in-out">
                <li><a href="#home" className="hover:text-green-600 transition">Home</a></li>
                <li><a href="#forrestTeam" className="hover:text-green-600 transition">Team Kami</a></li>
                <li><a href="#forrestNews" className="hover:text-green-600 transition">Berita</a></li>
                <li><a href="#forrestActivities" className="hover:text-green-600 transition">Kegiatan</a></li>
              </ul>
            )}
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/prmnh/" className="text-gray-800 hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://github.com/parahmen12" className="text-gray-800 hover:text-blue-400 transition duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.instagram.com/rzvnptr/" className="text-gray-800 hover:text-pink-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <div className="text-center text-gray-800 text-sm mt-4">
          &copy; {new Date().getFullYear()} Polisi Kehutanan. All Right Reserved.
        </div>
        <div className="text-center text-gray-600 text-sm mt-1">
          Muhamad Rezvan Putra Pratama
        </div>
      </div>
    </footer>
  );
};

export default Footer;
