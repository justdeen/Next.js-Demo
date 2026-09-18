import { Metadata } from "next";

type Props = {
    params: Promise<{productid: string}>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const id = (await params).productid
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`)
        }, 100)
        // resolve(`iPhone ${id}`)
    })
    return {
        title: `Product ${title}`,
        description: `This is the page for product ${title}`,
    }
}

export default async function ProductDetails({params}: {params: Promise<{productid: string}>;}) {
    const productId = (await params).productid
    return <h1>Product Details {productId}</h1>
}

