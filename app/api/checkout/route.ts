import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const products = await db.cart.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  products.forEach((product) => {
    line_items.push({
      quantity: product.quantity,
      price_data: {
        currency: "INR",
        product_data: {
          name: product.product.title,
        },
        unit_amount: parseInt(product.product.price),
      },
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${process.env.FRONTEND_STORE_URL}/order`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/cancel`,
  });
  await Promise.all(
    products.map((product) =>
      db.product.update({
        where: { id: product.product.id },
        data: { purchased: true },
      })
    )
  );

  return NextResponse.json({ url: session.url });
}
