import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
  };
};

export default async function ProductDetail({ params }: Props) {
  const productId = (await params).productId;
  const reviews = [];
  for (let i = 0; i < parseInt(productId); i++) {
    reviews.push(i + 1);
  }
  return (
    <>
      <h1>Product Detail {productId}</h1>
      <h2>Review for product {productId}</h2>
      <ol>
        {reviews.map((review) => (
          <li key={review}>
            <Link href={`${productId}/reviews/${review}`}>Review {review}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
