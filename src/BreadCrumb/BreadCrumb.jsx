import { Link, useLocation } from "react-router-dom";

const BreadCrumb = ({ title, home, room , img }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  return (
    <section
      className="relative bg-no-repeat bg-cover h-[550px] bg-center grid items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative mt-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-10 lg:leading-[60px] 2xl:leading-[70px] text-white font-semibold font-Garamond uppercase">
          {title}
        </h1>

        <div className="flex items-center justify-center">
          <Link
            to={`${pathName ? `/${pathName}` : "/"}`}
            className="text-base lg:text-2xl leading-10 2xl:leading-[70px] text-khaki font-semibold font-Garamond flex items-center"
          >
            Home <span className="mx-2 text-white">/</span>
          </Link>

          <Link
            to="#"
            className="text-base lg:text-2xl leading-10 2xl:leading-[70px] text-white font-semibold font-Garamond capitalize"
          >
            {title}
          </Link>
        </div>
      </div>
    </section>

  );
};

export default BreadCrumb;
