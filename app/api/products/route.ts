import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" });
  }
  const { title, description, imageUrl, price, category } = await req.json();

  const products = await db.product.create({
    data: {
      category,
      title,
      price,
      description,
      userId,
      imageUrl,
    },
  });
  return NextResponse.json({ products });
}
