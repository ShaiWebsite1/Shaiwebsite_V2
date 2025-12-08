// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   devIndicators: false
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/multi-specialty-coding',
        destination: 'https://shai.health/services/hospitals',
        permanent: true,
      },
      {
        source: '/services',
        destination: 'https://shai.health/',
        permanent: true,
      },
      {
        source: '/blog/data-analytics-transforms-healthcare-revenue-cycle-management',
        destination: 'https://shai.health/#blogSection',
        permanent: true,
      },
      {
        source: '/book-a-call',
        destination: 'https://shai.health/contact-us',
        permanent: true,
      },
      {
        source: '/blog/transforming-healthcare-operations-the-shai-advantage',
        destination: 'https://shai.health/#blogSection',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://shai.health/#blogSection',
        permanent: true,
      },
      {
        source: '/revenue-cycle-management',
        destination: 'https://shai.health/services/physician',
        permanent: true,
      },
      {
        source: '/homedir/public_html/public/index.php/payer-services',
        destination: 'https://shai.health/services/payers',
        permanent: true,
      },
      {
        source: '/blog/5-common-mistakes-in-medical-billing-coding',
        destination: 'https://shai.health/#blogSection',
        permanent: true,
      },
      {
        source: '/blog/comprehensive-healthcare-billing-services-for-all-specialties',
        destination: 'https://shai.health/#blogSection',
        permanent: true,
      },
      {
        source: '/value-based-care',
        destination: 'https://shai.health/services/value-based-care',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
