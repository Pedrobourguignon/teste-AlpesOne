import { Header } from "@/components/Header";
import "../styles/main.sass";
import { RequestQuote } from "@/components/RequestQuote";

export default function Home() {
  return (
    <div>
      <Header />
      <RequestQuote />
    </div>
  );
}
