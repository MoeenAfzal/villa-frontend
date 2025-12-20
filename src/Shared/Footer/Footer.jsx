import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Brand from "../../Components/Brand/Brand";
import { BiEnvelope, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("entry.1900117960", email); // replace with your actual entry ID

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSd45AFOE6pRTURKVSNoejvFhKceNjewI2rLGSipkEM4CjFl8w/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // Google Forms blocks CORS
      }
    );

    setSuccess(true);
    setEmail("");

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  } catch (error) {
    console.error("Error submitting form:", error);
  }
};


  return (
    <>
      {/* <Brand /> */}
      <footer className="">
        {/* footer content */}
        <div className="bg-lightBlack   ">
          <div className="Container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 2xl:grid-cols-12 gap-5 lg:gap-3 xl:gap-5 2xl:gap-[30px] pt-14 lg:pt-[100px] ">
            {/* Footer Content one. */}
            <div
              className="lg:mt-[-145px] lg:col-span-3 2xl:col-span-4 bg-[#272727]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" py-6 md:py-7 lg:py-[50px]  px-10 lg:px-5 xl:px-8 2xl:px-9 ">
                <img src="/images/photos/logo.png" alt="" />
                <div className="py-8 2xl:py-[50px] ">
                  <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10">
                    CONTACT INFO
                  </h1>
                  <div className="space-y-4 pt-[30px]  pb-2 2xl:pb-[30px] ">
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] mt-2">
                      <IoIosCall
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      +919828282728
                    </p>
                    {/* <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <BiEnvelope
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      example@yahoo.com
                    </p> */}
                    <p className="flex items-center text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                      <IoLocationSharp
                        className="text-khaki w-5 h-5 mr-3 2xl:mr-4 "
                        size={14}
                      />
                      Corum8 Mansion, Moringa Valley Farmhouse, behind Vaishno Devi Mandir, Near Holymont Resort Chirwa, Udaipur, Rajasthan 313001, India
                    </p>
                    <a className="text-lightGray text-khaki w-5 h-5 ml-4 2xl:mr-4" href="https://maps.app.goo.gl/rvH1ET8rgQRU7a8V6">See on map</a>
                  </div>
                </div>
                <div>
                  <ul className="flex space-x-3">
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#" className="">
                        <FaFacebookF className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>

                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#">
                        <FaTwitter className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#">
                        <BiLogoLinkedin className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                    <li className="hover-animBg group transition-all duration-300  rounded-full border border-lightGray border-opacity-75 hover:border-khaki cursor-pointer w-[37px] h-[37px] grid items-center justify-center">
                      <Link to="#">
                        <FaPinterestP className="text-lightGray text-opacity-75 group-hover:text-white group-hover:text-slateBlue-0 w-4 h-4 " />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* footer content-2 */}

            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-2 ml-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className=" text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                UseFul Links
              </h1>
              <div className="pt-[30px] pb-0 lg:py-[30px]">
                <ul
                  className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px] list-none hover:list-disc"
                >
                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <a href="https://wa.me/919828282728" target="_blank" rel="noopener noreferrer">
                      Pool Villa
                    </a>
                  </li>

                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <a href="https://wa.me/919828282728" target="_blank" rel="noopener noreferrer">
                      Events
                    </a>
                  </li>

                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <a href="https://wa.me/919828282728" target="_blank" rel="noopener noreferrer">
                      Reservations
                    </a>
                  </li>

                  <li className="hover:ml-[17px] md:hover:ml-[18px] transition-all duration-500 hover:text-khaki leading-[44px]">
                    <a href="https://wa.me/919828282728" target="_blank" rel="noopener noreferrer">
                      Contact Us
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            {/* footer content-3 */}

            <div
              className="pt-0 pb-8  lg:col-span-3 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                GALLERY
              </h1>
              <div className="grid grid-cols-3 gap-2 mt-[45px] w-[250px] sm:w-[300px] lg:w-full  content-center ">
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/56be6225-e521-4070-b958-16a8915bccf6.jpeg?im_w=720" alt="" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/f0942c66-fd68-464d-a4a5-0ca33b6c5cf5.jpeg?im_w=720" alt="" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/4add6d78-c57b-4ade-8c68-484ef6b93264.jpeg?im_w=720" alt="" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/0ae7e24f-9621-4643-84ee-eb5d6167124a.jpeg?im_w=1200" alt="" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/073f7b91-455b-4724-8017-ba22802bf8ac.jpeg?im_w=1200" alt="" />
                <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/4a8de4e5-2e20-494a-af94-3b42ff8a5860.jpeg?im_w=720" alt="" />
              </div>
            </div>
            {/* footer content-4 */}

            <div
              className="pt-0 pb-8 overflow-x-hidden lg:col-span-2 2xl:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-lg sm:text-xl md:text-[22px] leading-[38px] font-medium text-white relative font-Garamond before:w-7 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-10 uppercase ">
                NEWSLETTER
              </h1>
              <div className="space-y-4 py-[30px]">
                <p className="text-lightGray font-Lora font-normal text-sm sm:text-base leading-[26px]">
                  Subscribe our Newsletter
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="placeholder:text-gray placeholder:font-Lora placeholder:font-normal placeholder:text-[15px] text-center h-[56px] w-full px-10 placeholder:leading-[26px] text-[15px] text-gray border-none outline-none focus:outline-none focus:border-khaki focus:ring-0"
                    required
                  />

                  <button type="submit" className="btn-subscribe">
                    Subscribe Now
                  </button>
                </form>

                {success && (
                  <p className="text-green-500 pt-3 text-sm">
                    Successfully subscribed!
                  </p>
                )}

              </div>
            </div>
          </div>
          <div className="text-center py-5 2xl:py-7 bg-[#161616] text-sm md:text-base text-lightGray font-Lora font-normal">
            {` © ${new Date().getFullYear()} , Corum8. All Rights Reserved.`}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
