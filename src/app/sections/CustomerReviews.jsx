import { ReviewCard } from "@/components";
import { reviews } from "@/constants";

function CustomerReviews() {
  return (
    <section className="max-container">
      <div className="text-center">
        <h3 className="font-palanquin text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review}></ReviewCard>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
