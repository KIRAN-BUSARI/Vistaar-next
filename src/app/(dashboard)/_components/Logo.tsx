import Image from "next/image"

export const Logo = () => {
    return (
        <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
        />
    )
}