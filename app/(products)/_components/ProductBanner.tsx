import Image from "next/image";

export default function ProductBanner() {
  return (
    <div className="my-10 lg:mx-0 mx-5">
      <Image
        className="h-[400px] object-cover rounded-md"
        src="/images/zara.png"
        alt="banner"
        width={1200}
        height={400}
        quality={100}
      />
    </div>
  );
}
