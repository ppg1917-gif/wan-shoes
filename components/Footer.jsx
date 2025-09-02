export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="font-semibold mb-2">Контакти</h3>
          <p>+380 ХХ ХХХ ХХ ХХ</p>
          <p>info@oneshoes.ua</p>
          <p>м. Київ</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Навігація</h3>
          <p>Жіноче взуття</p>
          <p>Чоловіче взуття</p>
          <p>Знижки</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Соцмережі</h3>
          <a href="#">📱 Instagram</a>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-6">© 2025 One Shoes</p>
    </footer>
  );
}