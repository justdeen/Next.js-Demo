import Link from "next/link";

export default function F2(){
    return (
        <div>
            <h1>F2 Page</h1>
            <Link href={"/f4"}>F4</Link>
            <Link href={"f2/inner-f2"}>inner-f2</Link>
        </div>
    )
}