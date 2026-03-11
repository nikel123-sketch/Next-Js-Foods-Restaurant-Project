import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-700 text-white">
      <Link href={'/'}>
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full bg-amber-300"
        />
      </Link>

      <div className="space-x-3">
        <Link href="/" className="hover:text-amber-400 transition">
          Home
        </Link>
        <Link href="foods" className="hover:text-amber-400 transition">
          foods
        </Link>
        <Link href="reviews" className="hover:text-amber-400 transition">
          reviews
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
