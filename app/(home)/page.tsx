import { addUserToDb } from "@/actions/add-user";
import ProductCard from "../(products)/_components/ProductCard";
import Banner from "./_components/Banner";

export default async function Home() {
  addUserToDb();
  return (
    <main>
      <div>
        <Banner />
      </div>
      <div className="my-10 lg:mx-0 mx-5">
        <h3 className="text-3xl font-bold">See Our Featured Items</h3>
      </div>
      <ProductCard />
    </main>
  );
}
