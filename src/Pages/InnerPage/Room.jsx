import React, { useEffect, useRef, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "../../Components4/Testimonial/testimonials.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BiChevronDown } from "react-icons/bi";
import ical from "ical"; // npm install ical
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// import required modules

const Room = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [bookedDates, setBookedDates] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const roomsSectionRef = useRef(null);
  const navigate = useNavigate();

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
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
  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      Swal.fire({
        icon: "warning",
        title: "Dates Required",
        text: "Please select check-in and check-out dates.",
        confirmButtonColor: "#c9a14a",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/calendar");
      const text = await res.text();

      const data = ical.parseICS(text);

      const events = Object.values(data)
        .filter(event => event.type === "VEVENT")
        .map(event => ({
          start: new Date(event.start),
          end: new Date(event.end),
        }));

      const inDate = new Date(checkIn);
      const outDate = new Date(checkOut);

      const isBooked = events.some(
        event => inDate < event.end && outDate > event.start
      );

      if (isBooked) {
        Swal.fire({
          icon: "error",
          title: "Not Available",
          text: "Sorry, the room is NOT available for the selected dates.",
          confirmButtonColor: "#c9a14a",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Rooms Available 🎉",
          text: "Great! Please scroll down to choose your room.",
          confirmButtonText: "View Rooms",
          confirmButtonColor: "#c9a14a",
        }).then(() => {
         navigate("/room");
      });
      }

    } catch (err) {
      console.error("Failed to fetch ICS:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to check availability. Please try again later.",
        confirmButtonColor: "#c9a14a",
      });
    }
  };



  return (
    <div id="rooms" className="bg-whiteSmoke dark:bg-lightBlack">
  


      {/* Rooms section heading */}
      <div
        ref={roomsSectionRef}
        className="py-20 2xl:py-[120px] w-full bg-[url('/images/photos/emblem3.png')] bg-no-repeat bg-top bg-opacity-[0.07]"
      >

        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-[20px]">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/photos/emblem.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mb-[6]  font-Garamond font-semibold uppercase">
              Corum8 Mansion – A Private Luxury Mansion

            </h1>
            <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base mt-[15px] lg:mt-0">
              Corum8 Mansion is a single, private hilltop estate designed to host everything from peaceful family escapes to high-profile business retreats. The mansion can be customized as a 3BHK, 4BHK, or 5BHK setup depending on your group size — offering full exclusivity for your stay.
            </p>
          </div>
          {/* Rooms Slider Container */}

          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider " ref={sliderRef}>
              {/* slide - 1 */}
              <div className="keen-slider__slide number-slide1 ">
                <div data-aos="fade-up-left" data-aos-duration="1000">
                  <div className="overflow-x-hidden 3xl:w-[410px] group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src="/images/photos/bed1.jpg"
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <Link to={"/2bhk-room-detail"}
                          state={{
                            title: "2 BHK Suite",
                            price: 1,
                            area: "2500 SQ.FT",
                            beds: "2 King Bed",
                            image: "/images/photos/bed1.jpg"
                          }}>
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <BsArrowRight className="w-4 h-4 ml-2 text-white" />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] font-Lora font-normal leading-[26px]">
                        <span className="">₹1</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>

                      <div className="border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <Link to="/">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              2 BHK Suite
                            </h2>
                          </Link>
                          <p className="text-sm font-normal text-gray dark:text-lightGray font-Lora">
                            2500 SQ.FT / Room
                          </p>
                        </div>
                        <div className="border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img
                                  src="/images/home-1/-bottom-icon.png"
                                  alt=""
                                />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  2 King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="flex justify-center mt-2">
                    <a
                      href="/2bhk-room-detail"

                      rel="noopener noreferrer"
                    >
                      <button className="btn-primary">Book Now</button>
                    </a>
                  </div>
                </div>
              </div>

              {/* slide - 2 */}
              <div className="keen-slider__slide number-slide1 ">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="3xl:w-[410px] group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src="/images/photos/bed2.jpg"
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <Link to={"/3bhk-room-detail"}
                          state={{
                            title: "3 BHK Suite",
                            price: 40000,
                            area: "4000 SQ.FT",
                            beds: "3 King Bed",
                            image: "/images/photos/bed2.jpg"
                          }}>
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <BsArrowRight className="w-4 h-4 ml-2 text-white" />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] font-Lora font-normal leading-[26px]">
                        <span className="">₹40,000</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>

                      <div className="border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <Link to="/">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              3 BHK Family Suite
                            </h2>
                          </Link>
                          <p className="text-sm font-normal text-gray dark:text-lightGray font-Lora">
                            4000 SQ.FT / Room
                          </p>
                        </div>
                        <div className="border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img src="/images/home-1/-bottom-icon.png" alt="" />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  3 King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="flex justify-center mt-2">
                    <a
                      href="/3bhk-room-detail"

                      rel="noopener noreferrer"
                    >
                      <button className="btn-primary">Book Now</button>
                    </a>
                  </div>
                </div>
              </div>

              {/* slide - 3 */}
              <div className="keen-slider__slide number-slide1 ">
                <div data-aos="fade-up-right" data-aos-duration="1000">
                  <div className="3xl:w-[410px] group relative">
                    <div className="relative">
                      <div className="overflow-hidden">
                        <img
                          src="/images/photos/bed3.jpg"
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <Link to={"/4bhk-room-detail"}
                          state={{
                            title: "4 BHK Suite",
                            price: 80000,
                            area: "5600 SQ.FT",
                            beds: "4 King Bed",
                            image: "/images/photos/bed2.jpg"
                          }}>
                          <button className="flex items-center justify-center text-[15px] leading-[38px] bg-lightBlack absolute bottom-0 -left-40 px-5 text-white group-hover:left-0 transition-all duration-300 hover:bg-khaki">
                            View Details{" "}
                            <BsArrowRight className="w-4 h-4 ml-2 text-white" />{" "}
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="font-Garamond">
                      <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] font-Lora font-normal leading-[26px]">
                        <span className="">₹80,000</span>
                        <span className="mx-2">|</span>
                        <span>Night</span>
                      </div>

                      <div className="border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0">
                        <div className="py-6 px-[30px]">
                          <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                            Luxury Room
                          </h4>
                          <Link to="/">
                            <h2 className="text-2xl lg:text-[28px] leading-[26px] font-semibold text-lightBlack dark:text-white py-4">
                              4 BHK Premium Suite
                            </h2>
                          </Link>
                          <p className="text-sm font-normal text-gray dark:text-lightGray font-Lora">
                            5600 SQ.FT / Room
                          </p>
                        </div>
                        <div className="border-t-[1px] border-[#e8e8e8] dark:border-[#424242] py-5">
                          <div className="px-[30px] flex items-center justify-between">
                            <div className="">
                              <span className="font-Lora text-base flex items-center ">
                                <img src="/images/home-1/-bottom-icon.png" alt="" />
                                <span className="ml-[10px] text-gray dark:text-lightGray">
                                  4 King Bed
                                </span>
                              </span>
                            </div>
                            <span className="w-[1px] h-[25px] bg-[#ddd] dark:bg-gray"></span>
                            <ul className="flex items-center text-khaki space-x-[5px]">
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                              <li><FaStar /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="flex justify-center mt-2">
                    <a
                      href="/4bhk-room-detail"

                      rel="noopener noreferrer"
                    >
                      <button className="btn-primary">Book Now</button>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* slider breckpoints */}
            <div className="mx-auto ">
              {loaded && instanceRef.current && (
                <div className="dots flex items-center justify-center">
                  {[
                    ...Array(
                      instanceRef.current.track.details.slides.length
                    ).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={
                          "dot" + (currentSlide === idx ? " active" : "")
                        }
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
