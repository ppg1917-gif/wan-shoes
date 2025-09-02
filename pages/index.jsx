import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <section className="bg-gray-50 py-20 text-center">
        <h1 className="text-5xl font-bold">Іти легко, іти впевнено, іти в One Shoes.</h1>
      </section>
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto py-16 px-4">
        <Link href="/category/women" className="bg-gray-100 h-60 flex items-center justify-center hover:bg-gray-200"><h2 className="text-2xl font-bold">Жіноче взуття</h2></Link>
        <Link href="/category/men" className="bg-gray-100 h-60 flex items-center justify-center hover:bg-gray-200"><h2 className="text-2xl font-bold">Чоловіче взуття</h2></Link>
        <Link href="/category/sale" className="bg-red-100 h-60 flex items-center justify-center hover:bg-red-200"><h2 className="text-2xl font-bold text-red-600">Знижки</h2></Link>
      </section>
      <Footer />
    </div>
  );
}