import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ical from "ical"; // npm install ical
const RoomDetails3BHK = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const location = useLocation();
    const { state } = location;
    const room = state || {}; // fallback to empty object
    const bookingsData = location.state && location.state;
    const [checkIn, setCheckIn] = useState(new Date().toISOString().split("T")[0]);
    const [checkOut, setCheckOut] = useState(
        new Date(new Date().setDate(new Date().getDate() + 0))
            .toISOString()
            .split("T")[0]
    );
    localStorage.setItem("bookingsData", JSON.stringify(bookingsData));

    const [children, setChildren] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [passport, setPassport] = useState("");

    const navigate = useNavigate();
    const images = [
        "/images/inner/room-details-1.jpg",
        "/images/inner/room-details-2.jpg",
    ];


    const prevBtn = () => {
        setImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
    const nextBtn = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const calculateTotal = () => {
        if (!checkIn || !checkOut) return 0;
        const inDate = new Date(checkIn);
        const outDate = new Date(checkOut);
        const diffTime = Math.max(outDate - inDate, 0); // in ms
        const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
        const pricePerNight = room?.price || 100; // fallback price
        const childrenCharge = (parseInt(children) || 0) * 2000; // 2000 per child
        return pricePerNight * nights + childrenCharge;
    };
const confirmBooking = async () => {
  // 1️⃣ Validate inputs
  if (!checkIn) return Swal.fire("Error", "Please enter check-in date", "error");
  if (!checkOut) return Swal.fire("Error", "Please enter check-out date", "error");
  if (!children) return Swal.fire("Error", "Please enter number of children", "error");
  if (!email) return Swal.fire("Error", "Please enter email", "error");
  if (!phone) return Swal.fire("Error", "Please enter phone number", "error");
  if (!city) return Swal.fire("Error", "Please enter city", "error");
  if (!passport) return Swal.fire("Error", "Please enter passport number", "error");

  try {
    // 2️⃣ CHECK AVAILABILITY FIRST
    const calRes = await fetch("https://api-venue.corum8.com/api/calendar");
    const calText = await calRes.text();

    const data = ical.parseICS(calText);

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
      return Swal.fire({
        icon: "error",
        title: "Not Available",
        text: "Sorry, the room is NOT available for the selected dates.",
        confirmButtonColor: "#c9a14a",
      });
    }

    // 3️⃣ Dates are available → PROCEED TO PAYMENT
    const totalAmount = calculateTotal();

    const bookingData = {
      checkIn,
      checkOut,
      children,
      email,
      phone,
      city,
      passport,
      title: room.title,
    };

    Swal.fire({
      title: "Processing Payment...",
      text: "Please wait while we initiate your booking.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await fetch(
      "https://api-venue.corum8.com/api/booking/create-payment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount, bookingData }),
      }
    );

    const dataPayment = await response.json();
    console.log("PayPal Order Response:", dataPayment);

    if (dataPayment.links) {
      const approvalLink = dataPayment.links.find(
        link => link.rel === "approve"
      )?.href;

      if (approvalLink) {
        window.location.href = approvalLink; // ✅ Redirect to PayPal
      } else {
        Swal.fire("Error", "Unable to find PayPal approval link", "error");
      }
    } else {
      Swal.fire("Error", "PayPal order creation failed", "error");
    }

  } catch (error) {
    console.error(error);
    Swal.fire(
      "Error",
      "Something went wrong. Please try again.",
      "error"
    );
  }
};







    return (
        <section className="">
            <BreadCrumb img="/images/photos/bed2.jpg" title="room details" />

            {/* Room Details */}
            <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
                <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5 ">
                    <div className="col-span-6 md:col-span-4">
                        {/* Image custom slider */}
                        <div
                            className="overflow-hidden relative group "
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/images/photos/bed2.jpg"
                                alt=""
                                className="transition-all duration-500 delay-300"
                            />
                            <div className="flex ">
                                <span
                                    className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 lg:group-hover:left-6 transition-all duration-300 cursor-pointer"
                                    onClick={() => prevBtn()}
                                >
                                    <BsArrowLeft
                                        size={20}
                                        className="text-lightBlack dark:text-white hover:text-white"
                                    />
                                </span>
                                <span
                                    className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white dark:bg-lightBlack hover:bg-khaki dark:hover:bg-khaki grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 lg:group-hover:right-6 transition-all duration-300 cursor-pointer"
                                    onClick={() => nextBtn()}
                                >
                                    <BsArrowRight
                                        size={20}
                                        className="text-lightBlack dark:text-white hover:text-white"
                                    />
                                </span>
                            </div>
                        </div>
                        {/* Room content */}
                        <div className="pt-5 lg:pt-[35px]  pr-3">
                            <p className="text-base font-Lora text-khaki">LUXURY ROOM</p>
                            <h2
                                className="py-2 sm:py-3 md:py-4 lg:py-[19px] 2xl:py-[25px] font-Garamond text-[22px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[38px] 3xl:text-[40px] leading-6 lg:leading-[26px]  text-lightBlack dark:text-white font-semibold"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                3 BHK Premium Stay at Corum8 Venue

                            </h2>

                            <p className="text-gray my-2"><strong>Comfortably Accommodates Up to 9 Guests</strong> </p>
                            <p className="text-gray my-2"><strong>Spacious Living for Families, Groups & Extended Stays</strong> </p>
                            <p
                                className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                Our 3 BHK accommodation at Corum8 Venue is designed for guests who need ample space, privacy, and comfort. Ideal for large families, group stays, business teams, or event guests, this unit offers a perfect balance of luxury and functionality — all under one roof.
                            </p>



                            {/* House Roles */}
                            <div className="mt-6" data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    3 Bedrooms | Capacity: Up to 9 People
                                </h2>

                            </div>
                            {/* Childreen & Extra Beds */}
                            <div
                                className="pt-10 2xl:pt-[60px]"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
    font-Garamond text-[22px] sm:text-2xl md:text-2xl 2xl:text-[22px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    Three Private Bedrooms
                                </h2>

                                <ul className="space-y-2 lg:space-y-3">
                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Spacious, well-ventilated bedrooms
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Comfortable beds with premium mattresses
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Fresh linens, wardrobes & bedside tables
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Peaceful environment for restful sleep
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="pt-10 2xl:pt-[60px]"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
    font-Garamond text-[22px] sm:text-2xl md:text-2xl 2xl:text-[22px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    Living & Dining Area
                                </h2>

                                <ul className="space-y-2 lg:space-y-3">
                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Large living room with comfortable seating
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Dining space suitable for group meals
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Ideal for relaxation, discussions, or informal meetings
                                        </span>
                                    </li>
                                </ul>
                            </div>


                            <div
                                className="pt-10 2xl:pt-[60px]"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
    font-Garamond text-[22px] sm:text-2xl md:text-2xl 2xl:text-[22px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    Bathrooms
                                </h2>

                                <ul className="space-y-2 lg:space-y-3">
                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Clean, modern bathrooms with quality fittings
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            24/7 hot & cold water supply
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Fresh towels and essential toiletries
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div
                                className="pt-10 2xl:pt-[60px]"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
    font-Garamond text-[22px] sm:text-2xl md:text-2xl 2xl:text-[22px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    Kitchen / Pantry (if applicable)
                                </h2>

                                <ul className="space-y-2 lg:space-y-3">
                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Functional kitchen or pantry area
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Suitable for long stays or light cooking
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="pt-10 2xl:pt-[60px]"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
    font-Garamond text-[22px] sm:text-2xl md:text-2xl 2xl:text-[22px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    Amenities & Facilities
                                </h2>

                                <ul className="space-y-2 lg:space-y-3">
                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            High-speed Wi-Fi
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Air-conditioned rooms
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Power backup
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Regular housekeeping
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Secure and private property
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Parking facility
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            On-call support during your stay
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="pt-10 2xl:pt-[60px]"
                                data-aos="zoom-in-up"
                                data-aos-duration="1000"
                            >
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
    font-Garamond text-[22px] sm:text-2xl md:text-2xl 2xl:text-[22px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    Ideal For
                                </h2>

                                <ul className="space-y-2 lg:space-y-3">
                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Families and large groups (up to 9 guests)
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Corporate teams & consultants
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Wedding or event guests
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Long-stay travelers
                                        </span>
                                    </li>

                                    <li className="flex items-center">
                                        <BsCheck2 size={16} className="text-khaki mr-2" />
                                        <span className="text-sm lg:text-base leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                            Friends traveling together
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-duration="1000">
                                <h2
                                    className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Garamond text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                                >
                                    More Space. More Comfort. More Privacy.
                                </h2>
                                <p className="text-sm lg:text-base leading-6 text-gray dark:text-lightGray font-normal font-Lora">
                                    The 3 BHK at Corum8 Venue ensures everyone enjoys their own space while staying connected in a shared, welcoming environment. Whether you’re here for work, celebration, or relaxation, this is a stay that truly feels like home.

                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-span-6 md:col-span-3 lg:col-span-2">
                        {/* booking details sidebar */}
                        <div>
                            <div className="bg-whiteSmoke dark:bg-normalBlack px-7 py-8 md:px-8 md:py-10 lg:px-9 lg:py-11 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px] grid-flow-row-dense">
                                <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-4">
                                    Booking
                                </h4>

                                <div className="grid gap-[18px]">
                                    {[
                                        { label: "Check In", type: "date", value: checkIn, setter: setCheckIn },
                                        { label: "Check Out", type: "date", value: checkOut, setter: setCheckOut },
                                        { label: "Children over 5 age", type: "number", value: children, setter: setChildren },
                                        { label: "Email", type: "email", value: email, setter: setEmail },
                                        { label: "Phone", type: "text", value: phone, setter: setPhone },
                                        { label: "City", type: "text", value: city, setter: setCity },
                                        { label: "Passport Number", type: "text", value: passport, setter: setPassport },
                                    ].map((field, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-lightBlack h-auto lg:h-auto 2xl:h-auto grid px-3 sm:px-5 2xl:px-6 py-2 rounded"
                                        >
                                            <label
                                                className="block text-sm md:text-[15px] leading-[26px] font-Lora font-medium text-lightBlack dark:text-white mb-1"
                                            >
                                                {field.label}
                                            </label>
                                            <input
                        type={field.type}
                        value={field.value}
                        required
                        onChange={(e) => field.setter(e.target.value)}
                        onClick={(e) => {
                          if (field.type === "date" && e.target.showPicker) {
                            e.target.showPicker();
                          }
                        }}
                        className="w-full bg-white dark:bg-lightBlack text-khaki border border-gray-300 dark:border-gray-600 py-2 px-3 rounded focus:border-khaki focus:ring-1 focus:ring-khaki"
                      />

                                        </div>
                                    ))}
                                </div>
                                {/* Total Amount */}
                                {/* Total Amount */}

                            </div>
                            <div className="py-5">
                                <div className="bg-white dark:bg-lightBlack px-3 sm:px-5 2xl:px-6 py-3 rounded mb-4 flex justify-between items-center">
                                    <span className="text-sm md:text-[15px] font-Lora font-medium text-lightBlack dark:text-white">
                                        Total Amount:
                                    </span>
                                    <span className="text-sm md:text-[15px] font-Lora font-semibold text-khaki">
                                        {(() => {
                                            if (checkIn && checkOut) {
                                                const inDate = new Date(checkIn);
                                                const outDate = new Date(checkOut);
                                                const diffTime = Math.max(outDate - inDate, 0); // in ms
                                                const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
                                                const pricePerNight = 40000; // fallback price
                                                const childrenCharge = (parseInt(children) || 0) * 2000; // 2000 per child
                                                const total = pricePerNight * nights + childrenCharge;
                                                return `₹${total} (${nights} night${nights > 1 ? "s" : ""}, ${children || 0} child over age of 5 ${children > 1 ? "ren" : ""})`;
                                            }
                                            return `₹${4000}`;
                                        })()}
                                    </span>
                                </div>
                                <button
                                    className="bg-khaki w-full h-10 2xl:h-[50px] text-white font-Lora font-semibold px-5 hover-animBg after:rounded-none after:bg-normalBlack"
                                    onClick={() => confirmBooking()}
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </div>


                        {/* Amenities */}
                        <div
                            className="mt-3 sm:mt-4 md:mt-5 lg:mt-6"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            <h4 className="font-Garamond text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-6">
                                Amenities
                            </h4>
                            <div className="grid items-center ">
                                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                                    <img
                                        src="/images/inner/room-amenities-1.png"
                                        className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                                    />
                                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                        6 - 9 Persons
                                    </span>
                                </div>
                                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                                    <img
                                        src="/images/inner/room-amenities-2.png"
                                        className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                                    />
                                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                        Free WiFi Available
                                    </span>
                                </div>
                                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                                    <img
                                        src="/images/inner/room-amenities-3.png"
                                        className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                                    />
                                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                        Swimming Pools
                                    </span>
                                </div>
                                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                                    <img
                                        src="/images/inner/room-amenities-4.png"
                                        className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                                    />
                                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                        Kitchen
                                    </span>
                                </div>
                                <div className="flex items-center py-5 border-b-[1px] border-lightGray dark:border-gray">
                                    <img
                                        src="/images/inner/room-amenities-5.png"
                                        className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                                    />
                                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                        250 SQFT Rooms
                                    </span>
                                </div>
                                <div className="flex items-center py-5 ">
                                    <img
                                        src="/images/inner/room-amenities-6.png"
                                        className="text-khaki mr-2 md:mr-3 xl:mr-[15px]"
                                    />
                                    <span className="text-sm lg:text-[15px] leading-[26px] text-gray dark:text-lightGray font-normal font-Lora">
                                        Gym facilities
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomDetails3BHK;
