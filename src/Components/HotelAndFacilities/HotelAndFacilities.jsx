import { useState } from "react";

const facilitiesData = [
  {
    category: "Features",
    items: [

      {
        name: "Pool",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/12057c64-9d4a-433e-bd31-850b4ca4114b.png?im_w=1200",
        hoverImage: "/images/photos/pon.jpeg",
      },
      {
        name: "Jacuzzi",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/0ae7e24f-9621-4643-84ee-eb5d6167124a.jpeg?im_w=1200",
        hoverImage: "/images/photos/jag.jpeg",
      },
      {
        name: "Yoga",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/073f7b91-455b-4724-8017-ba22802bf8ac.jpeg?im_w=1200",
        hoverImage: "/images/photos/yoga.jpeg",
      },
      {
        name: "Hot Tub",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/d64ce469-61e0-4d7e-b491-3438ddbe4611.jpeg?im_w=720",
        hoverImage: "/images/photos/ht.jpeg",
      },
      {
        name: "Mountain Trekking",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/12057c64-9d4a-433e-bd31-850b4ca4114b.png?im_w=720",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/1b4dfb30-a08f-4f34-8a0d-9e89c4250a5b.jpeg?im_w=1200",
      },
      {
        name: "Spa & Wellness",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/bfc8dcf7-ea98-4dbe-93b9-909a10a8c437.jpeg?im_w=720",
        hoverImage: "/images/photos/spa.jpeg",
      },
      {
        name: "Garden",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/4fef3f14-bb97-4fc3-a42e-68aacf3b2fdb.jpeg?im_w=720",
        hoverImage: "/images/photos/gd.jpeg",
      },
      {
        name: "Firepit area",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/1bf542e3-2099-4f52-9ab3-c4e63f584722.jpeg?im_w=1200",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/56be6225-e521-4070-b958-16a8915bccf6.jpeg?im_w=720",
      },
      {
        name: "Patio",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/0c3b1a0e-cae1-44a3-9c25-26a4e7c916e0.jpeg?im_w=720",
      },
      {
        name: "Outdoor Dinner",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/7fc5ae15-4502-4dd4-8706-e87ab27c4745.jpeg?im_w=1200",
      },
      {
        name: "Sunlounger",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/f0942c66-fd68-464d-a4a5-0ca33b6c5cf5.jpeg?im_w=720",
      },
      {
        name: "Valley View Rooftop",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/4add6d78-c57b-4ade-8c68-484ef6b93264.jpeg?im_w=720",
      },
      {
        name: "Garden Chess",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/681e21e3-eb12-4ee3-9bfd-fa6b590d49ff.jpeg?im_w=720",
      },
      {
        name: "Parking",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "/images/photos/parkn.jpeg",
      },
      {
        name: "Helipad",
        icon: "https://a0.muscache.com/im/pictures/hosting/Hosting-1544385860919253271/original/6e347db2-800d-4d73-817d-f8a1f038aa9b.jpeg?im_w=720",
        hoverImage: "/images/photos/hellipad.jpeg",
      },
    ],
  }
];

const HotelAndFacilities = () => {
  const [activeCategory, setActiveCategory] = useState(facilitiesData[0].category);

  const activeData = facilitiesData.find((group) => group.category === activeCategory);

  return (
    <section id="offers" className="bg-lightBlack z-[1]">
      <div className="py-[110px] bg-[url('/images/photos/emblem3.png')] bg-no-repeat bg-top bg-opacity-[0.07]">
        <div className="Container">
          {/* Section Header */}
          <div
            className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
              <hr className="w-[100px] h-[1px] bg-[#3b3b3b]" />
              <img
                src="/images/photos/emblem.png"
                alt="section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-[#3b3b3b]" />
            </div>

            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-Garamond font-semibold uppercase">
              WHAT THIS PLACE OFFERS
            </h1>
            <p className="font-Lora leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              Discover all the facilities and comforts we provide to make your
              stay truly relaxing.
            </p>
          </div>

        

          {/* Active Category Content */}
          {activeData && (
            <div className="mt-[35px] " data-aos="fade-up" data-aos-duration="1000">
        

              <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 xl:gap-[26px] pb-[60px] px-8 lg:px-10 xl:px-28 2xl:px-0">
                {activeData.items.map((item, index) => (
                  <div
                    key={index}
                    className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] 
    before:absolute before:w-0 before:h-full before:left-0 before:top-0 
    before:transition-all before:duration-500 before:bg-cover before:bg-center
    hover:before:w-full hover:before:z-[1] group"
                    style={{
                      "--hover-image": `url(${item.hoverImage})`,
                    }}
                  >
                    {/* Background image via inline CSS */}
                    <style jsx>{`
      div:hover::before {
        background-image: var(--hover-image);
      }
    `}</style>

                    <div>
                      {/* <img src={item.icon} alt={item.name} className="mx-auto w-[50px] h-[50px]" /> */}
                    </div>
                    <div>
                      <h4 className="text-[18px] leading-[28px] font-Garamond text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HotelAndFacilities;
