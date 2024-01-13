import { UserButton } from "@clerk/nextjs";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:mx-0 mx-5 my-10">
     <Logo />
      <div className="flex items-center justify-center space-x-4">
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
