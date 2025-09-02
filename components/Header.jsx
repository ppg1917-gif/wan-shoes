import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="text-center py-6">
        <img src="/logo.png" alt="One Shoes Logo" className="mx-auto h-20 object-contain" />
      </div>
      <nav className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex space-x-8">
            <Link href="/">Головна</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/help">Довідкова</Link>
            <Link href="/contacts">Контакти</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/cart">🛒</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}