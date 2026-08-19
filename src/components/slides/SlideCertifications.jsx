import React from 'react';
import Webflow3DSlider from '../Webflow3DSlider';

export default function SlideCertifications({ onOpenModal }) {
  const certItems = [
    {
      src: '/assets/pdf_cert_4359935-Performance_marketing-ANKUR_VERMA_2_p1.png',
      title: 'Masters in Performance Marketing',
      category: 'Performance Marketing'
    },
    {
      src: '/assets/pdf_cert_4790426-Diploma-ANKUR_VERMA_p1.png',
      title: 'Diploma in Digital Marketing',
      category: 'Digital Marketing'
    },
    {
      src: '/assets/pdf_cert_Search_engine_optimization-ANKUR_VERMA_3_p1.png',
      title: 'Search Engine Optimization (SEO)',
      category: 'SEO & Growth'
    },
    {
      src: '/assets/pdf_cert_Skill_Degree_DM-ANKUR_VERMA_2_p1.png',
      title: 'Skill Degree in Digital Marketing',
      category: 'Professional Degree'
    },
    {
      src: '/assets/pdf_cert_ANKUR_VERMA_DIGITAIGA_intern_CERTIFICATE_OF_EXCELLENCE_p1.png',
      title: 'Certificate of Excellence (DIGITAIGA)',
      category: 'Agency Internship'
    },
    {
      src: '/assets/pdf_cert_ANKUR_VERMA_Reliving_letter_p1.png',
      title: 'Relieving & Experience Certificate',
      category: 'Experience Letter'
    }
  ];

  const handleCardClick = (item) => {
    if (onOpenModal) {
      onOpenModal(item.src, `${item.title} — ${item.category}`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Webflow3DSlider
        title="CERTIFICATION"
        subtitle="Verified high-resolution original certifications in Digital Marketing, Performance Ads, SEO, and Agency Experience."
        items={certItems}
        autoPlayInterval={1800}
        onItemClick={handleCardClick}
      />
    </div>
  );
}
