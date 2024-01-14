"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ContinueButton() {
    const router = useRouter();
  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/checkout`
    );

    window.location = response.data.url;
    router.refresh();
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
