import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import ShowOrder from "../_components/ShowOrder";

export default async function OrderPage() {
  const { userId } = auth();
  const purchasedItems = await db.product.findMany({
    where: {
      userId: userId!,
      purchased: true,
    },
  });
  console.log(purchasedItems);
  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold my-20 text-center">Order History</h3>
      </div>
      <div className="space-y-6">
     {purchasedItems.map((item) => (
        <ShowOrder key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
}
