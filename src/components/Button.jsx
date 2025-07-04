import PropTypes from "prop-types";
import Image from "next/image";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`font-montserrat flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg leading-none hover:brightness-90 ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "border-coral-red bg-coral-red text-white"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="arrow right icon"
          width={20}
          height={20}
          className="ml-2 h-5 w-5 rounded-full bg-white"
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
