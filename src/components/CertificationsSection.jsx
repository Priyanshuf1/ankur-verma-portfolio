import React from 'react';
import { ZoomIn, Award } from 'lucide-react';
import TiltCard from './TiltCard';

export default function CertificationsSection({ onOpenModal }) {
  const certs = [
    {
      id: 1,
      title: 'Masters in Digital Marketing',
      issuer: 'SkillCircle',
      specialisation: 'Performance Marketing',
      src: '/assets/cert_masters_dm_1.png',
      alt: 'SkillCircle Certificate - Masters in Digital Marketing (Performance Marketing)'
    },
    {
      id: 2,
      title: 'Diploma in Digital Marketing',
      issuer: 'SkillCircle',
      specialisation: 'Digital Marketing Practice',
      src: '/assets/cert_diploma_dm.png',
      alt: 'SkillCircle Certificate - Diploma in Digital Marketing'
    },
    {
      id: 3,
      title: 'Masters in Digital Marketing',
      issuer: 'SkillCircle',
      specialisation: 'SEO Specialisation',
      src: '/assets/cert_masters_dm_2.png',
      alt: 'SkillCircle Certificate - Masters in Digital Marketing (SEO)'
    },
    {
      id: 4,
      title: 'Skill Degree in Digital Marketing',
      issuer: 'SkillCircle',
      specialisation: 'Advanced Digital Strategy',
      src: '/assets/cert_skillcircle_1.png',
      alt: 'SkillCircle Certificate - Skill Degree'
    },
    {
      id: 5,
      title: 'Certificate of Excellence',
      issuer: 'DIGITAIGA Marketing Agency',
      specialisation: 'Digital Marketing Internship',
      src: '/assets/cert_digitaiga.png',
      alt: 'DIGITAIGA Certificate of Excellence - Ankur Verma'
    },
    {
      id: 6,
      title: 'Skill Degree Certificate',
      issuer: 'SkillCircle',
      specialisation: 'Digital Marketing Practices',
      src: '/assets/cert_skillcircle_2.png',
      alt: 'SkillCircle Certificate - Skill Degree 2'
    }
  ];

  return (
    <section id="certifications" className="relative py-20 bg-damask border-t border-[#990000]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-futuristic text-5xl sm:text-7xl font-black text-[#b30000] tracking-wider uppercase select-none mb-3">
            CERTIFICATION
          </h2>
          <p className="font-body text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
            Professional certifications that showcase my expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certificate 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <TiltCard
              key={cert.id}
              maxDegree={10}
              scaleOnHover={1.04}
              onClick={() => onOpenModal(cert.src, cert.title)}
              className="group bg-[#0d0406]/90 border border-[#990000]/40 rounded-xl shadow-xl hover:border-red-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] transition-all"
            >
              <div className="relative aspect-[4/3] bg-black/40 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-futuristic text-xs uppercase tracking-wider">
                  <ZoomIn className="w-5 h-5 text-red-500" />
                  <span>Click to Expand</span>
                </div>
              </div>

              <div className="p-4 border-t border-[#990000]/20 bg-[#140609]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-futuristic uppercase tracking-widest text-red-400">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="font-body text-base font-semibold text-white group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {cert.specialisation}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Subtitle Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-[#990000]/30 pt-8">
          <h3 className="font-futuristic text-2xl text-red-600 font-bold mb-2">
            Verified Expertise
          </h3>
          <p className="font-body text-xs sm:text-sm text-gray-300">
            Industry-recognized certifications that strengthen my professional skills and knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}
