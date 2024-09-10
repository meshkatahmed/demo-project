import SearchCar from "./components/searchCar";
import Campaigns from "./components/campaigns";
import CarType from "./components/carType";
import Manufacturers from "./components/manufacturers";
import CertifiedCars from "./components/certifiedCars";
import HowTo from "./components/howTo";
import FAQ from "./components/FAQ";

export default function Body() {
    return (
        <>
            <SearchCar/>
            <Campaigns/>
            <CarType/>
            <Manufacturers/>
            <CertifiedCars/>
            <HowTo/>
            <FAQ/>
        </>
    )
}