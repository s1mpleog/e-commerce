"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function ContinueButton() {
  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/checkout`
    );

    window.location = response.data.url;
  };
  return (
    <Button
      onClick={onCheckout}
      className="absolute bottom-5 right-5"
      size="lg"
    >
      Continue
    </Button>
  );
}
