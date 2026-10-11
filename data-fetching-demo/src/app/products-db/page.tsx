import {getProducts} from "@/prisma-db";
import Link from "next/link";
import {ProductDetail} from "./product-detail"; 

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductsPage({searchParams}: {searchParams: {query?: string}}) {
    const {query} = await searchParams; 
    const products: Product[] = await getProducts(query);

    return <ProductDetail products={products}/>
}