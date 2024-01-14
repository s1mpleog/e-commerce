import Image from "next/image";

export default function Banner() {
  return (
    <div className="my-5 lg:mx-0 mx-5">
      <Image
        className="h-[400px] object-cover rounded-md"
        src="/images/banner3.jpg"
        alt="banner"
        width={1200}
        height={400}
        quality={80}
        priority
      />
    </div>
  );
}
