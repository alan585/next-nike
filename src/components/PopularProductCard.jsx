import PropTypes from "prop-types";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex w-full flex-1 flex-col">
      <img src={imgURL} alt={name} className="h-[282px] w-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src="/assets/icons/star.svg" alt="icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

PopularProductCard.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default PopularProductCard;
