import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

interface RelatedProductProps {
  id: string;
}

export default async function RelatedProduct({ id }: RelatedProductProps) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });
  const relatedProduct = await db.product.findMany({
    where: {
      category: product?.category,
      NOT: {
        id,
      },
    },
  });
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 my-10">
      {relatedProduct?.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <div className="flex flex-col lg:mx-0 mx-5 lg:max-w-[300px] space-y-6 items-center justify-between">
            <div className="rounded-lg">
              <Image
                className="lg:max-w-[250px] lg:min-w-[250px] max-h-[250px] min-h-[250px] object-cover object-top rounded-md"
                src={product.imageUrl}
                alt={product.title}
                width={250}
                height={250}
                quality={100}
                priority
              />
              <div className="my-6">
                <p className="line-clamp-2 font-medium">{product.title}</p>
              </div>
              <div className="flex items-start justify-between">
                <p className="text-slate-500 text-sm">{product.category}</p>
                <p className="">${product.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
