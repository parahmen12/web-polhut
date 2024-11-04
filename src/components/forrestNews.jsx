import React from 'react';

const ForrestNews = () => {
  // Data berita polisi kehutanan
  const news = [
    {
      id: 1,
      title: 'Penangkapan Pelaku Illegal Logging di Hutan Lindung',
      description: 'Tim polisi kehutanan berhasil menangkap pelaku illegal logging yang merusak kawasan hutan lindung di Sumatra.',
      url: '#',
    },
    {
      id: 2,
      title: 'Penghijauan Hutan: Upaya Penyelamatan Lingkungan',
      description: 'Kegiatan penghijauan di kawasan hutan gundul di Kalimantan mendapatkan dukungan dari berbagai pihak.',
      url: '#',
    },
    {
      id: 3,
      title: 'Edukasi Masyarakat tentang Pentingnya Hutan',
      description: 'Polisi kehutanan mengadakan seminar untuk meningkatkan kesadaran masyarakat akan pentingnya menjaga hutan.',
      url: '#',
    },
    {
      id: 4,
      title: 'Dua Pelaku Pembalakan Liar Dihukum Penjara',
      description: 'Pengadilan memutuskan untuk menghukum dua pelaku pembalakan liar selama 5 tahun penjara.',
      url: '#',
    },
    {
      id: 5,
      title: 'Kerjasama Internasional untuk Melindungi Hutan',
      description: 'Negara-negara ASEAN sepakat untuk bekerjasama dalam melindungi hutan dari perusakan.',
      url: '#',
    },
  ];

  return (
    <div className="container md:mx-19  md:px-10">
      <h2 className="text-2xl font-bold mb-4">Berita Polisi Kehutanan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Baca Selengkapnya
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForrestNews;
