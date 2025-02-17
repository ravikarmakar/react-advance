// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Award, ChevronRight } from "lucide-react";

// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   imageUrl: string;
//   link: string;
// }

// const CertificateSection = () => {
//   const [selectedCert, setSelectedCert] = useState<number | null>(null);

//   const certificates: Certificate[] = [
//     {
//       id: 1,
//       title: "Advanced Web Development",
//       issuer: "Udacity",
//       date: "2024",
//       imageUrl: "/api/placeholder/400/250",
//       link: "#",
//     },
//     {
//       id: 2,
//       title: "React & TypeScript Masterclass",
//       issuer: "Coursera",
//       date: "2023",
//       imageUrl: "/api/placeholder/400/250",
//       link: "#",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       issuer: "Google",
//       date: "2023",
//       imageUrl: "/api/placeholder/400/250",
//       link: "#",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//         className="space-y-8"
//       >
//         <div className="text-center mb-12">
//           <motion.h2
//             className="text-4xl font-bold mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Certificates & Achievements
//           </motion.h2>
//           <motion.p
//             className="text-gray-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Showcasing my continuous learning journey and professional
//             development
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert) => (
//             <motion.div
//               key={cert.id}
//               variants={itemVariants}
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() =>
//                 setSelectedCert(selectedCert === cert.id ? null : cert.id)
//               }
//             >
//               <div className="relative">
//                 <img
//                   src={cert.imageUrl}
//                   alt={cert.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-2 right-2">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="bg-white p-2 rounded-full shadow-md"
//                   >
//                     <Award className="w-6 h-6 text-blue-500" />
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
//                 <p className="text-gray-600 mb-4">{cert.issuer}</p>

//                 <motion.div
//                   initial={{ height: 0 }}
//                   animate={{ height: selectedCert === cert.id ? "auto" : 0 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="pt-4 border-t">
//                     <p className="text-gray-500 mb-4">Completed: {cert.date}</p>
//                     <a
//                       href={cert.link}
//                       className="inline-flex items-center text-blue-500 hover:text-blue-600"
//                     >
//                       View Certificate
//                       <ExternalLink className="w-4 h-4 ml-2" />
//                     </a>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   animate={{ rotate: selectedCert === cert.id ? 90 : 0 }}
//                   className="mt-4 flex justify-center"
//                 >
//                   <ChevronRight className="w-6 h-6 text-gray-400" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CertificateSection;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Award, X } from "lucide-react";

// interface Certificate {
//   id: number;
//   title: string;
//   issuer: string;
//   date: string;
//   imageUrl: string;
// }

// // Simple Image Dialog Component
// const ImageDialog = ({
//   imageUrl,
//   title,
//   onClose,
// }: {
//   imageUrl: string;
//   title: string;
//   onClose: () => void;
// }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     onClick={onClose}
//     className="fixed inset-0 bg-black bg-opacity-80 z-40 flex items-center justify-center p-4"
//   >
//     <div className="relative max-w-4xl w-full">
//       <button
//         onClick={onClose}
//         className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300"
//       >
//         <X className="w-8 h-8" />
//       </button>
//       <motion.img
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.95, opacity: 0 }}
//         src={imageUrl}
//         alt={title}
//         onClick={(e) => e.stopPropagation()}
//         className="w-full rounded-lg"
//       />
//     </div>
//   </motion.div>
// );

// const CertificateSection = () => {
//   const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

//   // Handle ESC key to close dialog
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setSelectedCert(null);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   const certificates: Certificate[] = [
//     {
//       id: 1,
//       title: "Full Stack Development",
//       issuer: "Apna Collage",
//       date: "2023",
//       imageUrl:
//         "https://lh3.googleusercontent.com/pw/AP1GczMi-peaFb_Pd9JSx34i-nnslx8yk8n2urfjdsgRKBxtexSpj8T4UZAVKX5s_7KtOYt8TpWru1Px1FzJFapc6NjG3FUskuvfQ42FITkWDje0cI_M9hGL5Hi0yN2wA7tZZjO6gSoGRkDKx6th_Opo6W6A=w960-h679-s-no-gm?authuser=0",
//     },
//     {
//       id: 2,
//       title: "React & TypeScript Masterclass",
//       issuer: "Coursera",
//       date: "2023",
//       imageUrl:
//         "https://lh3.googleusercontent.com/pw/AP1GczMi-peaFb_Pd9JSx34i-nnslx8yk8n2urfjdsgRKBxtexSpj8T4UZAVKX5s_7KtOYt8TpWru1Px1FzJFapc6NjG3FUskuvfQ42FITkWDje0cI_M9hGL5Hi0yN2wA7tZZjO6gSoGRkDKx6th_Opo6W6A=w960-h679-s-no-gm?authuser=0",
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Fundamentals",
//       issuer: "Google",
//       date: "2023",
//       imageUrl:
//         "https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 relative overflow-hidden">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4">Certificates & Achievements</h2>
//         <p className="text-gray-600">
//           Showcasing my continuous learning journey
//         </p>
//       </div>
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-secondary/20 rounded-2xl p-5 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden cursor-pointer"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setSelectedCert(cert)}
//             >
//               <div className="relative">
//                 <img
//                   src={cert.imageUrl}
//                   alt={cert.title}
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//                 <div className="absolute top-2 right-2">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="bg-accent/10  p-3 rounded-full shadow-md"
//                   >
//                     <Award className="w-6 h-6 text-blue-500 p-2rounded-lg" />
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
//                 <p className="text-gray-600">{cert.issuer}</p>
//                 <p className="text-gray-500 mt-2">{cert.date}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedCert && (
//           <ImageDialog
//             imageUrl={selectedCert.imageUrl}
//             title={selectedCert.title}
//             onClose={() => setSelectedCert(null)}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default CertificateSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, FileCheck } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  fileUrl: string;
  fileType: "pdf" | "image";
}

// PDF Preview Component
const PDFPreview = ({ url }: { url: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      <Document
        file={url}
        onLoadSuccess={({ numPages }: any) => {
          setNumPages(numPages);
          setLoading(false);
        }}
        loading={
          <div className="flex items-center justify-center h-48">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        }
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page"
        />
      </Document>
      {numPages && numPages > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
          {pageNumber} / {numPages}
        </div>
      )}
    </div>
  );
};

// Image Dialog Component
const CertificateDialog = ({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black bg-opacity-80 z-40 flex items-center justify-center p-4"
  >
    <div className="relative max-w-4xl w-full">
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300"
      >
        <X className="w-8 h-8" />
      </button>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg overflow-hidden"
      >
        {certificate.fileType === "pdf" ? (
          <PDFPreview url={certificate.fileUrl} />
        ) : (
          <img
            src={certificate.fileUrl}
            alt={certificate.title}
            className="w-full rounded-lg"
          />
        )}
      </motion.div>
    </div>
  </motion.div>
);

const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Advanced Web Development",
      issuer: "Udacity",
      date: "2024",
      fileUrl:
        "https://res.cloudinary.com/dfrkmmpxj/image/upload/v1739534520/certificate-delta-batch-web-development-656c99c46d04c6b398053bca_oypr4c.pdf", // Replace with your PDF URL
      fileType: "pdf",
    },
    {
      id: 2,
      title: "React & TypeScript Masterclass",
      issuer: "Coursera",
      date: "2023",
      fileUrl: "/api/placeholder/800/600",
      fileType: "image",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "2023",
      fileUrl: "/sample2.pdf", // Replace with your PDF URL
      fileType: "pdf",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-gray-600">
            Showcasing my continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative">
                {cert.fileType === "pdf" ? (
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <FileCheck className="w-12 h-12 text-blue-500" />
                  </div>
                ) : (
                  <img
                    src={cert.fileUrl}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="absolute top-2 right-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white p-2 rounded-full shadow-md"
                  >
                    <Award className="w-6 h-6 text-blue-500" />
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-500 mt-2">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateDialog
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>

      <style jsx global>{`
        .pdf-page {
          max-width: 100%;
          height: auto !important;
        }
        .pdf-page canvas {
          max-width: 100%;
          height: auto !important;
        }
      `}</style>
    </>
  );
};

export default CertificateSection;
