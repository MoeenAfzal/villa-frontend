import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Corum8 - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
