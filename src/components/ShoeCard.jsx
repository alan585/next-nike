import PropTypes from "prop-types";

const ShoeCard = ({ imgURL, setBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      setBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer rounded-xl border-2 max-sm:flex-1 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgURL.bigShoe}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="z-20 object-contain"
        />
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  imgURL: PropTypes.any.isRequired,
  setBigShoeImg: PropTypes.any.isRequired,
  bigShoeImg: PropTypes.any.isRequired,
};

export default ShoeCard;
