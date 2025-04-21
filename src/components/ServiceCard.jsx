import PropTypes from "prop-types";
import Image from "next/image";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-3xl w-full flex-1 rounded-[20px] px-10 py-16 sm:w-[350px] sm:min-w-[350px]">
      <div className="bg-coral-red flex h-11 w-11 items-center justify-center rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-palanquin mt-5 text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="font-montserrat text-slate-gray mt-3 break-words text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

ServiceCard.propTypes = {
  imgURL: PropTypes.string,
  label: PropTypes.string,
  subtext: PropTypes.string,
};

export default ServiceCard;
