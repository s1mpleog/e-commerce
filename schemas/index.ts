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
  description: z.string()
});
