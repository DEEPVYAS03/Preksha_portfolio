// pages/cv.pdf.js
import { useEffect } from 'react';

const CVPage = () => {
  useEffect(() => {
    // Redirect to the PDF file when the page loads
    window.location.href = '/Resume_Preksha.pdf';
  }, []);

  return null;
};

export default CVPage;
