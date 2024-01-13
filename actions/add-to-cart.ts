"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { Product } from "@prisma/client";

export const addProductsToCart = async (id: string, product: Product) => {
  const { userId } = auth();
  if (!userId) {
    return { message: "Unauthorized" };
  }
  if (!id) {
    return { message: "Product ID not found." };
  }

  // Check if the product is already in the user's cart
  const existingCartItem = await db.cart.findFirst({
    where: {
      productId: product.id,
      userId,
    },
  });

  if (existingCartItem) {
    // Product is already in the cart, update the quantity
    await db.cart.update({
      where: {
        id: existingCartItem.id,
      },
      data: {
        quantity: existingCartItem.quantity + 1, // Increment the quantity
      },
    });
  } else {
    // Product is not in the cart, add a new entry
    await db.cart.create({
      data: {
        quantity: 1,
        productId: product.id,
        userId,
      },
    });
  }
};
