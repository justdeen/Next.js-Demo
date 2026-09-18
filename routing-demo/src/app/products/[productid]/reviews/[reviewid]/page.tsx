import {notFound, redirect} from "next/navigation"

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default async function ProductReview({
    params
}: {
    params: Promise<{productid: string; reviewid: string}>;}) {
    const random = getRandomInt(2)
    if(random === 1) {
        throw new Error("Error loading review")
    }
    const {productid, reviewid} = await params
    if (parseInt(reviewid) > 1000) {
        // notFound();
        redirect("/products")
    }
    return (
        <h1>Review {reviewid} for product {productid}</h1>
    ) 
}