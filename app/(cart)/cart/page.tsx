import DeleteFromCart from "../_components/DeleteFromCart";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function CartPage() {
  const { userId } = auth();
  const items = await db.cart.findMany({
    where: {
      userId: userId!,
    },
    include: {
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex flex-col space-y-6 items-center justify-start">
      {items.length <= 0 && (
        <p className="text-3xl font-bold my-20">
          There is no items in your cart
        </p>
      )}
      {items.map((item) => (
        <div className="min-w-full lg:mx-0 mx-5" key={item.productId}>
          <div
            key={item.id}
            className="flex border lg:mx-0 mx-5 lg:min-h-24 px-5 py-2 rounded-md items-center lg:justify-between space-x-6"
          >
            <Link key={item.id} href={`/product/${item.productId}`}>
              <Image
                className="rounded-md object-cover"
                src={item.product.imageUrl}
                width={100}
                height={100}
                alt="product"
              />
            </Link>
            <div className="flex flex-col lg:space-y-0 space-y-4 items-start justify-start">
              <div>
                <p className="line-clamp-1 lg:max-w-[300px]">
                  {item.product.title}
                </p>
                <p className="lg:block hidden">{item.quantity}</p>
                <p className="lg:text-base text-sm">${item.product.price}</p>
                <p className="lg:hidden inline-block">{item.quantity}</p>
                <p className="lg:block hidden">{item.product.category}</p>
                <div className="ml-0">
                  <DeleteFromCart id={item.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
