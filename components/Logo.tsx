import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}
