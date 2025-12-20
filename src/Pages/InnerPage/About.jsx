import BreadCrumb from "../../BreadCrumb/BreadCrumb";
// import {
//   BsArrowRight,
//   BsChevronLeft,
//   BsChevronRight,
//   BsPlay,
//   BsTwitter,
// } from "react-icons/bs";
// import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { useState } from "react";
// import { FaStar } from "react-icons/fa";
import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { Link } from "react-router-dom";
// import FsLightbox from "fslightbox-react";
const About = () => {
  const [setCurrentSlide] = useState(0);
  // const [setLoaded] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width:768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // setLoaded(true);
    },
  });

  return (
    <section className="">
      {/* <BreadCrumb title="About Us" home={""} /> */}

      {/* about content */}
      <section className="dark:bg-mediumBlack">
        <div className="Container py-20 2xl:py-[120px] sm:overflow-hidden lg:overflow-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* image */}
            <div
              className="flex-1"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/photos/nb.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>

            {/* text */}
            <div
              className="mt-10 md:mt-0 md:ml-10 lg:ml-[90px] 2xl:ml-[100px] font-Garamond space-y-3 xl:space-y-4 flex-1"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              <h5 className="text-base text-khaki leading-[26px] font-medium">
                The Luxury Hilltop Mansion by Corum8
              </h5>
              <h1 className="text-[22px] sm:text-2xl md:text-[21px]  xl:text-3xl 2xl:text-[38px] leading-6 md:leading-7 lg:leading-[30px] 2xl:leading-[44px] text-lightBlack dark:text-white font-semibold my-4">
                Why Corum8 Mansion is Udaipur’s Most Loved Villa
              </h1>
              <p className="text-sm xl:text-base md:text-sm lg:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
                <b>Villa for Photoshoots in Udaipur –</b>  cinematic pre-wedding, lifestyle, or brand shoots. <br />
                <b>Wedding Villa in Udaipur –</b>  intimate, elegant, and surrounded by breathtaking
                mountain views. <br />
                <b>Birthday & Anniversary Celebration Villa –</b>  luxury open-air party spaces and bonfire
                lounge. <br />
                <b>Corporate Retreat Villa Udaipur –</b>  peaceful setting for brainstorming and bonding. <br />
                <b>Honeymoon Villa in Udaipur –</b>  romantic, private, and naturally beautiful. <br />
                <b>Family Getaway Villa –</b>  where luxury feels like home.

              </p>


              <div className="bg-whiteSmoke dark:bg-lightBlack px-[30px] py-5">
                <p className="text-sm sm:text-base leading-10 3xl:leading-[50px] text-lightBlack dark:text-white font-medium font-Lora ">
                  For bookings and event enquiries, our concierge curates bespoke experiences for each guest.
                </p>

              </div>
              <a
          href="https://wa.me/919828282728"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="btn-primary mt-[30px]"
          >
            Contact Us
          </button>
        </a>

             
            </div>

            {/* text */}
          </div>
        </div>
      </section>



    </section>
  );
};

export default About;
