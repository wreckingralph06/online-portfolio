import Link from "next/link";

export default function NavbarItem({ navbarItemName, jumpTo }) {
    return (
        <li>
            <div className="navbar-text text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                <Link href={jumpTo}>
                    <div>{navbarItemName}</div>
                </Link>
            </div>
        </li>
    )
}