import React, { useState } from 'react';

const ForrestContact = () => {
  // State untuk menampung nilai input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "6281902679231"; // Ganti dengan nomor WhatsApp yang dituju (gunakan kode negara tanpa '+')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="forrestContact"
      className="py-10 overflow-hidden relative mx-5 md:mx-20 rounded-3xl"
      style={{
        backgroundImage: "url('https://img.okezone.com/content/2017/11/17/337/1816107/kenali-5-jenis-hutan-di-indonesia-rPsDew58IM.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 md:px-20 relative z-10 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Form Kontak - di sebelah kiri */}
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 md:mr-8 mb-8 md:mb-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Hubungi Kami</h2>
            
            {/* Nama */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nama</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            {/* Pesan */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Pesan</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tulis pesan Anda di sini..."
                rows="4"
                required
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300 w-full"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>

        {/* Teks judul dan subjudul - di sebelah kanan */}
        <div className="text-white mt-8 md:mt-36 w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right md:mx-40">
          <h2 className="text-3xl font-semibold mb-4">Hubungi Tim Polisi Kehutanan</h2>
          <p className="text-gray-200 text-lg leading-relaxed max-w-xs">
            Kami siap membantu menjawab pertanyaan atau memberikan informasi lebih lanjut mengenai upaya pelestarian hutan. Jangan ragu untuk menghubungi kami melalui form ini.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default ForrestContact;
