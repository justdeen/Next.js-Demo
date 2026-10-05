import {comments} from "./data"
import {type NextRequest} from "next/server"

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
    return Response.json(filteredComments)
}

export async function POST(request: Request){
    const body = await request.json()
    const newComment = {
        id: comments.length + 1,
        text: body.text,
    }
    comments.push(newComment)
    return Response.json(newComment, { status: 201 })
}