import React, { useState } from 'react';
import { useForrestNews } from '../hooks/useAPi';


const ForrestNews = () => {
  const { news, loading, error } = useForrestNews();
  const [selectedReport, setSelectedReport] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-4 ">Berita Polisi Kehutanan</h2>
      <hr className="mb-6 border-t-2 border-green-500 w-20 " />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(news) && news.map((report, index) => (
          <div
            key={report.guid}
            className="border rounded-lg p-4 shadow-md relative overflow-hidden"
          >
            {report.file && (
              <img
                src={`https://bucket-2.nos.wjv-1.neo.id/${report.file}`}
                alt={`News ${index + 1}`}
                className="w-full h-40 object-cover rounded-t-lg mb-2"
              />
            )}
            <h2 className="text-xl font-semibold mb-1">{report.description}</h2>
            <hr className="border-t-2 border-blue-300 w-16 mb-2" /> {/* Garis di bawah judul */}
            <p className="text-sm text-gray-500">{report.name}</p>
            <p className="text-gray-600 mb-4">{report.address}</p>

            {/* Tombol Detail */}
            <button
              onClick={() => setSelectedReport(report)}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 active:scale-95 transform transition duration-200 ease-in-out"
            >
              Detail
            </button>
          </div>
        ))}
      </div>

      {/* Modal untuk zoom detail berita */}
      {selectedReport && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          onClick={() => setSelectedReport(null)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-lg w-full relative transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedReport.file && (
              <img
                src={`https://bucket-2.nos.wjv-1.neo.id/${selectedReport.file}`}
                alt="Detail Image"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{selectedReport.description}</h2>
            <hr className="border-t-2 border-blue-500 w-20 mb-4" />
            <p className="text-gray-700 mb-4">{selectedReport.address}</p>
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForrestNews;
