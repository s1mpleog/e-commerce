import { db } from "@/lib/db";
import CreateProduct from "../_components/CreateProduct";

export default async function AdminPage() {
  const products = await db.product.findMany({})
  return (
    <div className="max-w-[1300px] mx-auto">
      {/* @ts-ignore */}
        <CreateProduct products={products} />
    </div>
  )
}