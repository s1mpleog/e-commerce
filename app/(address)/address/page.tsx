import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import AddressForm from "../_components/AddressForm";

export default async function AddressPage() {
  const { userId } = auth();
  const initialData = await db.address.findFirst({
    where: {
      userId: userId!,
    },
  });
  console.log(initialData)
  return (
    <div className="lg:mx-0 mx-5">
        <AddressForm initialData={initialData!} />
    </div>
  )
}
