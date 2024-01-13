"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const deleteProductsFromCart = async (id: string) => {
  const { userId } = auth();
  if (!userId) {
    return { message: "Unauthorized" };
  }
  if (!id) {
    return { message: "Id not found!" };
  }
  await db.cart.delete({
    where: {
      id,
      userId,
    },
  });
};
