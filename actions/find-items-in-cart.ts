"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const findFromCart = async () => {
  const { userId } = auth();
  if (!userId) {
    return { error: "Unauthorized" };
  }
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
  return items;
};
