import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {}

export default async function ProductCard({}: ProductCardProps) {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="grid lg:grid-cols-4 lg:mx-0 mx-5 grid-cols-2 lg:gap-20 gap-3 md:px-10 px-5 my-10 items-start">
      {products?.map((product) => (
        <Link href={`product/${product.id}`} key={product.id}>
          <div className="flex flex-col lg:max-w-[300px] max-w-[200px] space-y-6 items-center justify-between">
            <div className="rounded-lg">
              <Image
                className="lg:max-w-[250px] lg:min-w-[250px] max-h-[250px] min-h-[250px] object-cover lg:object-top object-center rounded-md"
                src={product.imageUrl}
                alt={product.title}
                width={250}
                height={250}
                quality={80}
                priority
              />
              <div className="my-6">
                <p className="line-clamp-2 font-medium ">{product.title}</p>
              </div>
              <div className="flex lg:items-start items-center justify-between">
                <p className="text-slate-500 lg:max-w-max max-w-[50px] lg:line-clamp-none line-clamp-1 text-[12px]">{product.category}</p>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
