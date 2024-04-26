import React from 'react'
import Resume from "./assets/resume.png"
import PDF from "./assets/RanjeetResume.pdf"
function resume() {
  const onButtonClick = () => {
    const pdfUrl = PDF;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ranjeet_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='flex justify-center items-center shadow-slate-300 shadow-xl mt-3'>
          <img src={Resume} alt="" loading='lazy' className='h-[90vh]' />
        </div>
        <button onClick={onButtonClick} className='btn download'>
          Download PDF
        </button>
      </div>
    </>
  )
}

export default resume