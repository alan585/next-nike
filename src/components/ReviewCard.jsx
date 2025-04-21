import PropTypes from "prop-types";
import Image from "next/image";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <Image
          src="/assets/icons/star.svg"
          alt={"rating star"}
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

ReviewCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default ReviewCard;
