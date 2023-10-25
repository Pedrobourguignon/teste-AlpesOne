import { Header } from "@/components/Header";
import { RequestQuote } from "@/components/RequestQuote";
import { MobileBanner } from "@/components/MobileBanner";
import "../styles/main.sass";
import { CarComponent } from "@/components/CarComponent";
import { carsList } from "@/utils/carsList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <RequestQuote />
      <MobileBanner />
      <div className="choose-your-bmw">
        <p>ESCOLHA SEU BMW</p>
        <div className="car-container">
          {carsList.map((car, index) => (
            <CarComponent name={car.name} picture={car.picture} key={+index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
