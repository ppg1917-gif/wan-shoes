import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function ProductPage() {
  const { query } = useRouter();
  return (
    <div>
      <Header />
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold">Товар #{query.id}</h1>
        <p>Тут будет описание и кнопка "Купить"</p>
      </div>
      <Footer />
    </div>
  );
}