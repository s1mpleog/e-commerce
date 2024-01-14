import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import { ShoppingCartIcon, ShoppingBag } from "lucide-react";
import Cart from "../../(cart)/_components/Cart";

interface SingleProductProps {
  id: string;
}

export default async function SingleProduct({ id }: SingleProductProps) {
  const product = await db.product.findFirst({
    where: {
      id,
    },
  });
  return (
    <main className="flex lg:flex-row flex-col lg:mx-0 mx-5 items-center justify-center gap-20 my-20">
      <div>
        <Image
          className="object-cover object-top rounded-md"
          src={product?.imageUrl!}
          alt="product"
          width={400}
          height={400}
          quality={100}
          priority
        />
      </div>
      <div className="space-y-14 max-w-[500px] mx-auto">
        <div>
          <h3 className="font-bold text-3xl line-clamp-3">{product?.title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">MRP ${product?.price}</p>
          </div>
          <div className="ml-auto">
            <p>{product?.category}</p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-6 justify-start">
          <div className="w-full">
            <Cart
              product={product!}
              id={product?.id!}
              userId={product?.userId}
            />
          </div>
          <div className="w-full">
            <Button className="w-full">
              <ShoppingBag className="h-6 w-6 mr-2" />
              Buy Now
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <p className="font-bold">Product Details</p>
          <p className="max-w-[600px]">{product?.description}</p>
        </div>
      </div>
    </main>
  );
}
