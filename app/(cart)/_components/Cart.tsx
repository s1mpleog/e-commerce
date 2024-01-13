"use client";
import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { addProductsToCart } from "@/actions/add-to-cart";

interface CartProps {
  product: Product;
  id: string;
  userId: string | undefined;
}

export default function Cart({ product, id, userId }: CartProps) {
  const router = useRouter();
  if (!userId) {
    return toast.error("Unauthorized");
  }
  const addToCart = async () => {
    addProductsToCart(id, product);
    toast.success("product added to cart successfully");
    router.push("/cart");
    router.refresh();
  };
  return (
    <div>
      <Button onClick={addToCart} variant="secondary" className="w-full">
        <ShoppingCartIcon className="h-6 w-6 mr-2" />
        Add To Cart
      </Button>
    </div>
  );
}
