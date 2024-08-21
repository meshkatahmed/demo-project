import Image from "next/image";

export default function Header() {
    return (
        <div className="border-2 rounded">
            <Image src="google.svg" alt="None" width={700} height={200} style={{margin:"auto"}}/>
        </div>
    )
}