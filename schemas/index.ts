import * as z from "zod";

export const AddProductSchema = z.object({
  title: z.string().min(1, {
    message: "Product title required",
  }),
  price: z.string().min(1, {
    message: "Price required",
  }),
  category: z.string(),
  imageUrl: z.string().min(1, {
    message: "Image Url required!",
  }),
  description: z.string(),
});

export const AddressSchema = z.object({
  name: z.string().min(1, {
    message: "name is required",
  }),
  address: z.string().min(3, {
    message: "Address is required",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  zipCode: z.string().min(1, {
    message: "Zip code is required",
  }),
});
