import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Cart() {
  return (
    <div>
      <Header />
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold">Ваш кошик</h1>
        <p>Тут будут товары, которые вы добавите</p>
      </div>
      <Footer />
    </div>
  );
}