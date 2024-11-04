import React from 'react';

const ForrestActivities = () => {
  const activities = [
    {
      title: 'Patroli Hutan',
      description: 'Patroli rutin dilakukan untuk memantau keamanan dan mencegah pembalakan liar di area hutan.',
      date: 'Setiap Minggu',
      image: 'https://ksdae.menlhk.go.id/assets/news/Patroli.jpg',
    },
    {
      title: 'Penanaman Pohon',
      description: 'Kegiatan menanam pohon untuk menjaga kelestarian hutan dan mengurangi dampak pemanasan global.',
      date: 'Setiap Bulan',
      image: 'https://ppid.menlhk.go.id/media/articles/5/uLJM_IMG-20231230-WA0014.jpg',
    },
    {
      title: 'Pembersihan Sampah',
      description: 'Membersihkan sampah yang tertinggal di kawasan hutan agar tetap bersih dan aman bagi flora dan fauna.',
      date: 'Setiap Dua Minggu',
      image: 'https://dpupr.pekalongankota.go.id/upload/file/images_20230508095907.jpeg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Aktivitas di Hutan</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-gray-600 mb-2">{activity.description}</p>
              <span className="text-sm text-gray-500">Waktu: {activity.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForrestActivities;
