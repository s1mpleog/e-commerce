"use server";
import * as z from "zod";
import { AddressSchema } from "@/schemas";
import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const AddressFormUpdate = async (
  values: z.infer<typeof AddressSchema>
) => {
  const { userId } = auth();
  const validatedValues = AddressSchema.safeParse(values);

  if (!validatedValues.success) {
    return { message: "Invalid Fields" };
  }

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const { name, address, email, zipCode } = validatedValues.data;

  // Check if the address with the given email already exists for the user
  const existingAddress = await db.address.findFirst({
    where: {
      userId: userId!,
      email,
    },
  });

  if (existingAddress) {
    // Update the existing address
    const updatedAddress = await db.address.update({
      where: {
        userId: userId!,
        email,
      },
      data: {
        address,
        email,
        name,
        zipCode,
      },
    });

    return updatedAddress;
  } else {
    // Create a new address
    const newAddress = await db.address.create({
      data: {
        address,
        email,
        name,
        zipCode,
        userId,
      },
    });

    return newAddress;
  }
};
