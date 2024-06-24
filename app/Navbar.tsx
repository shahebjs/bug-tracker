import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { IoBug } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-4">
      <div className="flex items-center gap-7">
        <ul className="flex items-center gap-7">
          <Link className="text-3xl" href="/">
            <IoBug />
          </Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/bugs">Bugs</Link>
        </ul>
      </div>
      <ul className="flex items-center gap-7">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link className={buttonVariants()} href="/login">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
