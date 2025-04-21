import PropTypes from "prop-types";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Image
        src={imgURL}
        width={282}
        height={282}
        alt={name}
        className="h-[282px] w-[282px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src="/assets/icons/star.svg" alt="icon" width={24} height={24} />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin mt-2 text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="font-montserrat text-coral-red mt-2 text-2xl font-semibold leading-normal">
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
