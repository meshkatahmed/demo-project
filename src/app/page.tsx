import SearchCar from "@/contents/homepage/searchCar";
import Campaigns from "@/contents/homepage/campaigns";
import CarType from "@/contents/homepage/carType";
import Manufacturers from "@/contents/homepage/manufacturers";
import CertifiedCars from "@/contents/homepage/certifiedCars";
import HowTo from "@/contents/homepage/howTo";
import FAQ from "@/contents/homepage/FAQ";
import Topper from "@/contents/homepage/topper";

export default function Home() {
  return (
    <>
      <Topper />
      <SearchCar />
      <Campaigns />
      <CarType />
      <Manufacturers />
      <CertifiedCars />
      <HowTo />
      <FAQ />
    </>
  );
}
