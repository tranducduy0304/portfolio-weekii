"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

const BtnDownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/CV.pdf'; 
    link.download = 'CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
        onClick={handleDownload}
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </div>
  );
};

export default BtnDownloadCV;


