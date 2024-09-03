import SearchCar from "./searchCar";
import Campaigns from "./campaigns";
import CarType from "./carType";

export default function Body() {
    return (
        <>
            <SearchCar/>
            <Campaigns/>
            <CarType/>
            {/* <Manufacturers/>
            <CertifiedCars/>
            <HowTo/>
            <FAQ/> */}
        </>
    )
}