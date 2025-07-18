import { Button } from "@/components";
import Image from "next/image";

function SpecialOffers() {
  return (
    <section className="max-container flex items-center justify-between gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <Image
          src="/assets/images/offer.svg"
          alt="special_offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h3>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-4">
          <Button
            label="Shop now"
            iconURL="/assets/icons/arrow-right.svg"
          ></Button>
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
