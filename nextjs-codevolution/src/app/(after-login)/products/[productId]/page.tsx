import { Metadata } from "next"

type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const productId = (await params).productId;
    return {
        title: `Product ${productId}`
    }
}

export default async function ProductDetail({ params }: Props) {
    const productId = (await params).productId
    console.log(typeof productId)
    return <h1>Product Detail {productId}</h1>
}