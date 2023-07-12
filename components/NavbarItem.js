import Link from "next/link";

export default function NavbarItem({ navbarItemName, jumpTo }) {
    return (
        <div className="navbar-text text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
            <Link href={jumpTo} className="bg-gradient-to-r px-4 py-2 border-none rounded-md mx-1">
                <div className="text-2xl">{navbarItemName}</div>
            </Link>
        </div>
    )
}