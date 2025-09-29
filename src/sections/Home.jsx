import { useState } from 'react';
import { motion } from 'framer-motion';
import homeImg from '../assets/profile.jpg';
import { ChevronRight, X } from 'lucide-react';

function CVModal({ isOpen, onClose, cvPath }) {
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur-sm p-4">
      {/* Container Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header Modal */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">My CV</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Modal (Pratinjau CV) */}
        <div className="flex-1 overflow-hidden">
          {/* Menggunakan iframe untuk menampilkan PDF. Ganti path dan pastikan CV ada di folder public */}
          <iframe 
            src={cvPath} 
            title="CV Preview" 
            className="w-full h-full border-0"
            // Atribut ini mungkin diperlukan untuk browser tertentu
            type="application/pdf"
          >
            <p className="p-4 text-center text-gray-500">
              Your browser does not support PDFs. 
              <a href={cvPath} download className="text-indigo-600 hover:underline ml-1">Download the CV</a> instead.
            </p>
          </iframe>
        </div>

        {/* Footer Modal (Tombol Download) */}
        <div className="p-4 border-t flex justify-center bg-gray-50">
          <a
            href={cvPath}
            download
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors shadow-lg"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
}


export default function Home() {
  // State untuk mengontrol tampilan modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CV_FILE_PATH = "/documents/Hernando-CV.pdf"; // Tentukan path CV di sini

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 items-center pt-20 pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* ... Kode konten Hello, I'm Hernando Tan ... */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Hernando Tan</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            An undergraduate Computer Science student at Bina Nusantara University, Alam Sutera campus, with a strong focus on Database Systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500/90 hover:bg-indigo-400 text-white px-4 py-2 font-medium">
              View My Project <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-white/15 hover:ring-white/30 text-slate-200 px-4 py-2 font-medium">
              Contact Me
            </a>
            
            {/* Tombol yang MEMBUKA MODAL */}
            <button 
              onClick={() => setIsModalOpen(true)} // Mengubah state menjadi true
              className="inline-flex items-center gap-2 rounded-2xl ring-1 ring-white/15 hover:ring-white/30 text-slate-200 px-4 py-2 font-medium"
            >
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <img
            src={homeImg}
            alt="Profile"
            className="w-[60%] h-[330px] mx-auto object-cover rounded-2xl ring-1 ring-white/10 shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Memanggil komponen modal */}
      <CVModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cvPath={CV_FILE_PATH} 
      />
    </>
  );
}