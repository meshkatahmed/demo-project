import Image from "next/image";
import Link from "next/link";
import style from '@/styles/homepage-body-campaigns.module.css';

export default function Campaigns() {
    return (
        <div className="container px-20 py-10">
            <h5 className="pageSectionHeading">Campaigns</h5>
            <div className="pageSectionBody">
                <div className={`${style.card} max-w-md rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300`}>
                    <Link href="#">
                        <Image src="/Banner-01.jpeg" fill={true} alt="Card Image"></Image>
                    </Link>
                </div>
                <div className={`${style.card} max-w-md rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300`}>
                    <Link href="#">
                        <Image src="/Banner-02.png" fill={true} alt="Card Image"></Image>
                    </Link>
                </div>
                <div className={`${style.card} max-w-md rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300`}>
                    <Link href="#">
                        <Image src="/Banner-03.png" fill={true} alt="Card Image"></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
}