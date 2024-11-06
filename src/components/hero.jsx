import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-screen"
      style={{ 
        backgroundImage: "url('https://cdn1.sisiplus.co.id/media/sisiplus/asset/uploads/artikel/NNbAKKuOyVeRhsBPVAYnrzRoAjKZGJZdEvJzzZqM.jpg')",
        backgroundAttachment: 'fixed'
       }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-white text-center md:text-left px-8 md:px-16 animate-fade-in font-sans">
        <div className="md:w-2/3 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Menjunjung Tinggi Etika Profesi dan Etika Perilaku
          </h1>
          <hr className="border-white my-4 w-24 mx-auto md:mx-0" />
          <p className="text-lg md:text-2xl leading-relaxed">
            Polisi kehutanan (Polhut) adalah pejabat tertentu dalam lingkungan instansi kehutanan pusat dan daerah yang sesuai dengan sifat pekerjaannya, menyelenggarakan dan/atau melaksanakan perlindungan hutan yang oleh kuasa undang-undang diberikan wewenang kepolisian khusus di bidang kehutanan dan konservasi sumber daya alam hayati dan ekosistemnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
