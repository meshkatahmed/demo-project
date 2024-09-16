import Link from "next/link";
import Image from "next/image";
import style from '@/styles/homepage-carType.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CarType() {
    const carTypeImages = [
        '/carTypes/crossover.png',
        '/carTypes/sedan.png',
        '/carTypes/sport-utility.png',
        '/carTypes/coupe.png',
        '/carTypes/convertible.png',
        '/carTypes/mpv.png',
        '/carTypes/wagon.png',
        '/carTypes/hybrid.png',
        '/carTypes/sports-car.png'
    ];
    const carTypes = carTypeImages.map((carTypeImage,index) => {
        return (
            <div key={index} className={style.typeCard}>
                <Link href="#">
                    <Image src={carTypeImage} fill={true} alt="Car Type Image"></Image>
                </Link>
            </div>
        );
    });
    return (
        <div>
            <h2>Car Type</h2>
            <div className="pageSectionBody flex flex-row space-x-10">
                <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                {carTypes}
                <button><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
}