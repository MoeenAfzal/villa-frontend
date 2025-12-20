import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Facilities = () => {
  return (
    <div id="facilities" className="dark:bg-mediumBlack ">
      <section className="Container py-[120px] md:py-0 md:pb-[120px] lg:py-[120px]">
        {/* section title and button */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-3 sm:px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className=" md:w-[450px] font-Garamond">
            <h5 className="text-base text-khaki leading-[26px] font-medium mb-[14px]  ">
              FACILITIES
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px]  text-lightBlack dark:text-white font-semibold ">
              Luxury Amenities at Corum8 Mansion

            </h1>
          </div>
         
        </div>
        {/* facilities container */}
        <div className="">
          {/* facilities section -1  */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[100%] md:pr-[30px]">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/28506dfe-7839-4d20-8723-5f502e73a3ea.jpeg?im_w=720"
                alt=""
                className="w-full h-full"
              />
              <div className=" hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  01
                </h2>
              </div>
            </div>
            <div className="relative font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0  h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                Fitness
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Stay & Comfort
                </Link>
              </h1>

              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px] relative">
                4 large bedrooms with ensuite bathrooms and mountain or pool views <br />
                Duplex layout with open living areas and balconies <br />
                Contemporary interiors and antique décor pieces <br />
                Panoramic lake & valley views from every level
              </p>

              
            </div>
          </div>

          {/* facilities section - 2 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                Fitness
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Wellness & Leisure</Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Infinity Pool and Kids’ Pool with sunset views <br />
                Jacuzzi & Steam Room for relaxation <br />
                Yoga Deck and Meditation Terrace <br />
                Bonfire & Star-Gazing Zone
              </p>
              
            </div>

            <div className="w-full  md:pl-[30px] relative mt-5 md:mt-0">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/7b5626ba-433a-430e-977e-444eb110b689.jpeg?im_w=1200"
                alt=""
                className="w-full h-full"
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki  font-Garamond">
                  02
                </h1>
              </div>
            </div>
          </div>
          {/* facilities section - 3 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[100%] md:pr-[30px]">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/4b28b9a7-61fa-4d43-97a4-95c730209c2e.jpeg?im_w=1200"
                alt=""
                className="w-full h-full"
              />
              <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  03
                </h2>
              </div>
            </div>
            <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                FOODS
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Dining & Hospitality
                </Link>
              </h1>

              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                In-house chef on call for personalized menus <br />
                Private dining pavilion overlooking the hills <br />
                BBQ & bonfire dinners under the night sky <br />
                24×7 concierge & housekeeping services
              </p>
              
            </div>
          </div>

          {/* facilities section - 4 */}
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                EXPERIENCE
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Lifestyle & Work</Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                High-speed Wi-Fi and creative workspace <br />
                Work-from-Nature lounge for founders and remote teams <br />
                Ideal for corporate stays and team offsites
              </p>
              
            </div>

            <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/f0942c66-fd68-464d-a4a5-0ca33b6c5cf5.jpeg?im_w=720"
                alt=""
                className="w-full h-full "
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  04
                </h1>
              </div>
            </div>
          </div>
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[100%] md:pr-[30px]">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/cf65472a-1700-4a05-836e-b27a4e62aaa4.jpeg?im_w=1200"
                alt=""
                className="w-full h-full"
              />
              <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  05
                </h2>
              </div>
            </div>
            <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                FOODS
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Experiences
                </Link>
              </h1>

              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Trekking trails and mountain walks around Moringa Valley <br />
                Community helipad perfect for aerial shoots <br />
                Luxury spa sessions on call <br />
                Rooftop lake view deck for events and photography <br />
                Outdoor Garden projector for streaming live cricket matches/ netflix <br />
              </p>
              
            </div>
          </div>
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className=" font-Garamond md:mr-[2px] lg:mr-[110px]  h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase ">
                EXPERIENCE
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Design That Inspires</Link>
              </h1>

              <p className="font-Lora relative text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                From pampas grass accents to earth-tone interiors, every detail at Corum8 Mansion radiates
                peace and sophistication. <br />
                It’s a space where luxury meets mindfulness — perfect for visionaries, creators, and families
                seeking both comfort and calm.
              </p>
              
            </div>

            <div className="w-full h-[100%]  relative md:pl-[30px] mt-5 md:mt-0">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/4add6d78-c57b-4ade-8c68-484ef6b93264.jpeg?im_w=720"
                alt=""
                className="w-full h-full "
              />
              <div className="hidden md:block absolute -top-[0px] -left-[12%] xl:-left-[6%]">
                <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  06
                </h1>
              </div>
            </div>
          </div>
          <hr className="text-[#e8e8e8] dark:text-[#383838] mb-10 mt-10" />
          <div
            className="grid grid-cols-1 md:grid-cols-2 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[100%] md:pr-[30px]">
              <img
                src="/images/photos/pl.jpeg"
                alt=""
                className="w-full h-full"
              />
              <div className="hidden md:block absolute -top-[0px] md:-right-[12%] -right-[7%] xl:-right-[5%]">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-[38px] text-khaki font-Garamond">
                  07
                </h2>
              </div>
            </div>
            <div className=" font-Garamond md:ml-[60px] lg:ml-[107px] mt-3 md:mt-0 relative h-full">
              {/* <h4 className="text-base font-semibold text-khaki leading-[26px] pb-[6px] uppercase mt-2 md:mt-0">
                FOODS
              </h4> */}
              <h1 className="text-2xl md:text-3xl 2xl:text-[32px] leading-[26px] font-semibold text-lightBlack dark:text-white">
                <Link to="/"> Prime Location – Moringa Valley, Udaipur

                </Link>
              </h1>

              <p className="font-Lora text-sm sm:text-base text-gray dark:text-lightGray leading-[26px] font-normal my-10 lg:mt-[46px] lg:mb-[40px] relative before:absolute before:h-[30px] before:left-0 before:top-[-35px] before:bg-[#ddd] before:w-[1px]">
                Just minutes from Udaipur City yet surrounded by nature <br />
                Near Valley of Flowers, Zipline Point, and Lake Trails <br />
                Close to Aurum Villa and Holymont Resort – Udaipur’s luxury neighborhood
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
