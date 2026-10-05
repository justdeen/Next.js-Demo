import {type NextRequest} from "next/server";
import {headers, cookies} from "next/headers";

export async function GET(request: NextRequest){
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"))

    const headersList = await headers()
    console.log(headersList.get("Authorization"))

    const theme = request.cookies.get("theme");
    console.log(theme)

    const cookiesList = await cookies()
    cookiesList.set("resultsPerPage", "20")
    console.log(cookiesList.get("resultsPerPage"))

    return new Response("<h1>Pofile API Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark",
        },
    })
}