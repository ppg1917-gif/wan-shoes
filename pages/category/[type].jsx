import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function CategoryPage() {
  const { query } = useRouter(); const { type } = query;
  return (
    <div>
      <Header />
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold">{type === "women" ? "Жіноче взуття" : type === "men" ? "Чоловіче взуття" : "Знижки"}</h1>
      </div>
      <Footer />
    </div>
  );
}