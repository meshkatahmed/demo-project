'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/navigation-bar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
    const pathname = usePathname();
    return (
        <div className="container px-40">
            <nav className={styles.navbar}>
                <Link href="/" style={{marginRight:'200px'}}>  
                    <Image
                        src="next.svg"
                        width={100}
                        height={100}
                        alt="A random image"
                    />
                </Link>
                <Link
                    className={pathname === '/' ?
                        styles.navLinkActive :
                        styles.navLink}
                    href='/'
                >
                    Home
                </Link>
                <Link
                    className={pathname === '/about' ?
                        styles.navLinkActive :
                        styles.navLink}
                    href='/about'
                >
                    About
                </Link>
                <Link
                    className={pathname === '/services' ?
                        styles.navLinkActive :
                        styles.navLink}
                    href='/services'
                >
                    Services
                </Link>
                <Link
                    className={pathname === '/contact' ?
                        styles.navLinkActive :
                        styles.navLink}
                    href='/offers'
                >
                    Offers
                </Link>
                <Link
                    className={pathname === '/contact' ?
                        styles.navLinkActive :
                        styles.navLink} 
                    href='/contacts'
                >
                    Contact
                </Link>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{marginLeft: '50px',marginRight: '50px'}}
                >
                    Login or Register
                </button>
               
                <FontAwesomeIcon
                    icon={faBasketShopping}
                    style={{ width: "30px" }}
                />
                <p style={{ marginLeft: "5px" }}>$0.0</p>
            </nav>
        </div>
    );
}
// style={{border:'2px',borderStyle:'solid'}}