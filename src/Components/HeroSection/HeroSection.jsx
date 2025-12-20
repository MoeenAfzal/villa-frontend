
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.css";

const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/photos/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(30,30,30,0.4)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full text-center font-Garamond">
        <div className="flex space-x-2 items-center justify-center mb-5 lg:mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] text-khaki"
            />
          ))}
        </div>



        <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
            The Luxury Hilltop Mansion
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
            by Corum8
          </h1>
          <h4 className="text-base mb-4">20,000 sq.ft. of Peace, Purpose & Celebration  for Visionaries <br /> and Families</h4>
        </div>

        <a
          href="https://wa.me/919828282728"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="w-[185px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 
      text-base font-Garamond font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack uppercase"
          >
            Contact Us
          </button>
        </a>


        {/* Contact Info */}
        <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center absolute left-0 top-1/2 -rotate-90">
          <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +91 9828282728
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
