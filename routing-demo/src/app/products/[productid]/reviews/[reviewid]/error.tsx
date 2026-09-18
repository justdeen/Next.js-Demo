"use client"

import {useRouter} from "next/navigation"
import {startTransition} from "react"

export default function ErrorBoundary({error, reset,}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter()
    const reload = () =>{
        startTransition(() =>{
            router.refresh();
            reset();
        })
    }
    return (
        <div>
            <p>{error.message}</p>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => reload()}>Try again</button>
        </div>
    )
}