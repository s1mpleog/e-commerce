"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { AddProductSchema } from "@/schemas";
import { FileUpload } from "@/components/FileUpload";
import Image from "next/image";
import { Product } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CreateProductProps {
  products: Product;
}

export default function CreateProduct({ products }: CreateProductProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      category: "",
      imageUrl: "",
      price: "",
      title: "",
      description: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof AddProductSchema>) => {
    try {
      await axios.post("/api/products", values);
      toast.success("Product Added Successfully");
      form.reset();
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };
  return (
    <main className="flex flex-col items-center border my-10 space-y-4 justify-center p-6">
      <div className="">
        <h1 className="text-3xl mb-10 font-medium">Product Creation Page</h1>
      </div>
      <Form {...form}>
        <form
          className="space-y-6 w-[350px] mx-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {products?.imageUrl && (
            <Image alt="img" src={products.imageUrl} width={400} height={400} />
          )}
          <FileUpload
            endPoint="productImage"
            onChange={(url) => {
              // @ts-ignore
              form.setValue("imageUrl", url);
            }}
          />
          <FormField
            control={form.control}
            name="title"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. 'Iphone 13 pro max'" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Price</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    placeholder="e.g. $49.99"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Category</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    {...field}
                    placeholder="e.g. 'Electronics'"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    className=""
                    {...field}
                    rows={10}
                    placeholder="e.g.'The features of this product is...'"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Create Product
          </Button>
        </form>
      </Form>
    </main>
  );
}
