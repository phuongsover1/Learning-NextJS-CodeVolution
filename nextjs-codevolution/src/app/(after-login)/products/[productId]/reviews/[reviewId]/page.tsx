import Link from "next/link";
import { notFound } from "next/navigation";

const getRandomNumber = (count: number): number =>
  Math.floor(Math.random() * count);
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  const random = getRandomNumber(2);
  console.log("🚀 ~ ProductReview ~ random:", random);
  if (random != 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
      <div>
        <Link href={`/products/${productId}`}>
          Return to product {productId} page
        </Link>
      </div>
    </>
  );
}
