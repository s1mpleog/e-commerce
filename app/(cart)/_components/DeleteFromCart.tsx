"use client";
import { deleteProductsFromCart } from "@/actions/delete-from-cart";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteFromCart({ id }: any) {
  const router = useRouter();
  const deleteItem = (id: any) => {
    deleteProductsFromCart(id);
    router.refresh();
    toast.success("Item delete from cart");
  };
  return (
    <div className="flex items-end justify-end ml-auto">
      <Button variant='ghost' size='sm' onClick={() => deleteItem(id)}>Remove</Button>
    </div>
  );
}
