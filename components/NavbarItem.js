import Link from "next/link";

export default function NavbarItem({ navbarItemName, jumpTo }) {
    return (
        <Link href={jumpTo} className="bg-gradient-to-r px-4 py-2 border-none rounded-md mx-1">
            <div className="text-2xl">{navbarItemName}</div>
        </Link>
    )
}