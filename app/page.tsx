import { Header } from "@/components/Header";
import "../styles/main.sass";
import { RequestQuote } from "@/components/RequestQuote";
import { MobileBanner } from "@/components/MobileBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <RequestQuote />
      <MobileBanner />
    </div>
  );
}
