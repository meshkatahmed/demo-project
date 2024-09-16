import Image from "next/image";
import Link from "next/link";
import style from '@/styles/homepage-campaigns.module.css';

export default function Campaigns() {
    const campaignBannerImages = ["/Banner-01.jpeg", "/Banner-02.png", "/Banner-03.png", "/Banner-01.jpeg", "/Banner-02.png", "/Banner-03.png"];
    const campaignBanners = campaignBannerImages.map((campaignBannerImage, index) => {
        return (
            <div key={index} className={`${style.card} max-w-md rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300`}>
                <Link href="#">
                    <Image src={campaignBannerImage} fill={true} alt="Banner Image"></Image>
                </Link>
            </div>
        );
    });

    return (
        <div>
            <h5>Campaigns</h5>
            <div className="pageSectionBody flex flex-row flex-wrap">
                {campaignBanners}
            </div>
        </div>
    );
};