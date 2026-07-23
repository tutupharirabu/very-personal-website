import alibaba from '@/assets/CertifiedCompetencies/Alibaba ACA Sertifikat.webp';
import bnsp from '@/assets/CertifiedCompetencies/Junior Web Developer Certificate - Irfan.webp';

export const certifications = [
  {
    icon: '\u2601\uFE0F',
    issuer: 'Alibaba Cloud',
    year: '2024',
    name: 'Alibaba Cloud Certified Associate (ACA) — Developer',
    image: alibaba,
    details: {
      certificateId: 'IACA07240900155896L',
      field: 'Cloud Computing — Developer Track',
      validity: 'Valid until September 2026',
    },
  },
  {
    icon: '\uD83C\uDF93',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2025',
    name: 'Junior Web Developer (Pengembang Web Pratama)',
    image: bnsp,
    details: {
      certificateNumber: '62010 2513 4 0011341 2025',
      registrationNumber: 'J.1389.01469.2025',
      issuingBody: 'LSP BPPTIK (Lembaga Sertifikasi Profesi BPPTIK)',
      validity: 'Valid until November 2028',
    },
  },
];
