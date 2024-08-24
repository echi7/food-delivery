"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation";

const DeleteButton = () => {
const {data:session, status} = useSession()
const router = useRouter()

if(status ==="loading") {
    return <p>Loading...</p>;
}

if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
}

    return (
        <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4">
            <Image src="/delete.png" alt="" width={20} height={20}/>
        </button>
    )
}

export default DeleteButton
