import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Checkout() {
  return (
    <div>
      <Header />
      <div className="max-w-lg mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Оформлення замовлення</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Ваше ім'я" className="w-full border px-4 py-2" />
          <input type="text" placeholder="Телефон" className="w-full border px-4 py-2" />
          <input type="text" placeholder="Адреса доставки" className="w-full border px-4 py-2" />
          <button className="bg-black text-white px-6 py-2">Підтвердити</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}