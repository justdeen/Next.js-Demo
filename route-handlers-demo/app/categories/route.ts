export const dynamic = "force-static";

export async function GET(){
    const categories = [
        {id: 1, name: "Electronics"},
        {id: 1, name: "Books"},
        {id: 1, name: "Clothing"},
        {id: 1, name: "Home & Garden"},
    ];

    return Response.json(categories)
}