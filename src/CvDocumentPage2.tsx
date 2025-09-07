const CVDocumentPage2 = () => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-sm w-[210mm] min-h-[297mm] p-[20mm] mx-auto mb-8">
      {/* Certifications */}
      <h2 className="font-bold text-sm uppercase tracking-wide border-b border-gray-400 pb-1 mb-3 mt-6 text-gray-900">
        Certifications
      </h2>
      <div className="mb-4">
        <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
          <li>Google Data Analytics Professional Certificate - Coursera (2023)</li>
          <li>Google UX Design Professional Certificate - Coursera (2024)</li>
          <li>Google IT Support Professional Certificate - Coursera (2024)</li>
        </ul>
      </div>

      {/* Leadership & Extracurricular */}
      <h2 className="font-bold text-sm uppercase tracking-wide border-b border-gray-400 pb-1 mb-3 mt-6 text-gray-900">
        Leadership & Extracurricular
      </h2>
      <div className="mb-4">
        <ul className="list-disc ml-6 space-y-1 text-sm text-gray-700">
          <li>StartUp Weekend Visayas Student Organization (TSO)</li>
          <li>1st & 2nd Runner-up - StartUp Pitch Competitions</li>
          <li>Participant - Local Hackathon (2024)</li>
          <li>2nd Place - Innovation Challenge in 3D System Design</li>
        </ul>
      </div>

      {/* Education */}
      <h2 className="font-bold text-sm uppercase tracking-wide border-b border-gray-400 pb-1 mb-3 mt-6 text-gray-900">
        Education
      </h2>
      <div className="mb-4">
        <p className="font-bold text-sm text-gray-900">
          Bachelor of Science in Information Technology (2021 - 2025)
        </p>
        <p className="text-sm text-gray-700">
          Siquijor State College - Larena, Siquijor, Philippines
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-700">
          <li>Dean&apos;s Lister - 2nd Year</li>
          <li>Class Honors - 3rd Year</li>
        </ul>
      </div>

      {/* Footer space for clean layout */}
      <div className="mt-12"></div>
    </div>
  );
};

export default CVDocumentPage2;
