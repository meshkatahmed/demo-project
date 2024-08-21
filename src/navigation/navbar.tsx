'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/navigation-bar.module.css";

export default function NavigationBar() {
    const pathname = usePathname();
    return (
        <nav className="text-2xl font-bold" style={{margin: "20px 0px 20px 0px"}}>
            <Link className={pathname==='/' ? styles.navLinkActive : styles.navLink} href='/'>Home</Link>
            <Link className={pathname==='/about' ? styles.navLinkActive : styles.navLink} href='/about'>About</Link>
            <Link className={pathname==='/services' ? styles.navLinkActive : styles.navLink} href='/services'>Services</Link>
            <Link className={pathname==='/contact' ? styles.navLinkActive : styles.navLink} href='/offers'>Offers</Link>
            <Link className={pathname==='/contact' ? styles.navLinkActive : styles.navLink} href='/contacts'>Contact</Link>
        </nav>
    );
}