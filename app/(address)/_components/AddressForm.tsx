"use client";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { AddressSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Address } from "@prisma/client";
import { AddressFormUpdate } from "@/actions/address-form";
import { useRouter } from "next/navigation";

interface AddressFormProps {
  initialData: Address;
}

export default function AddressForm({ initialData }: AddressFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      address: initialData?.address,
      email: initialData?.email,
      name: initialData?.name,
      zipCode: initialData?.zipCode,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = (values: z.infer<typeof AddressSchema>) => {
    AddressFormUpdate(values);
    // form.reset();
  };
  return (
    <div className="space-y-6 my-10">
      <div>
        <h4 className="text-3xl font-medium text-center">
          Fill out your Address to continue
        </h4>
      </div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    type="text"
                    placeholder="e.g.John doe"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    type="email"
                    placeholder="e.g.John doe @example.com"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    type="number"
                    placeholder="e.g.10001"
                  />
                </FormControl>
                <FormDescription>This is your zip code.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Address</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    type="text"
                    placeholder="e.g. John doe"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isSubmitting || !isValid}
            className="w-full"
            type="submit"
          >
            Continue to Checkout
          </Button>
        </form>
      </Form>
    </div>
  );
}
