import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo dan Deskripsi */}
          <div className="flex flex-col mb-6 md:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Lambang_Polhut.png"
              alt="Logo Polhut"
              className="w-28 mb-2"
            />
            <p className="text-sm text-gray-400">
              Melindungi hutan demi keberlanjutan sumber daya alam.
            </p>
          </div>

          {/* Navigasi */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Informasi</h3>
            <ul className="text-gray-400 space-y-1">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#forrestTeam" className="hover:text-white">Team Kami</a></li>
              <li><a href="#forrestNews" className="hover:text-white">Berita</a></li>
              <li><a href="#forrestActivities" className="hover:text-white">Kegiatan</a></li>
            </ul>
          </div>
        </div>

        {/* Garis Batas */}
        <hr className="my-4 border-gray-600" />

        {/* Media Sosial */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Media Sosial</h3>
          <ul className="flex space-x-4 text-gray-400">
            <li><a href="https://www.facebook.com/prmnh/" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="https://www.instagram.com/rzvnptr/" className="hover:text-pink-400">Instagram</a></li>
          </ul>
        </div>

        {/* Peta Area Pusat */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold mb-2">Peta Area Pusat</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509684!2d144.95373631531696!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f2cb6ef%3A0x5045675218ceed3!2sCBD%20Melbourne!5e0!3m2!1sen!2sau!4v1631289326413!5m2!1sen!2sau"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Peta Area Pusat"
          ></iframe>
        </div>

        <div className="text-center text-gray-400 mt-4 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Polisi Hutan. Semua Hak Dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
