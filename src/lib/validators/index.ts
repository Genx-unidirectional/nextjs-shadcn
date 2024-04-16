import * as z from "zod";

const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string(),
  category: z.string(),
  thumbnail: z.string().url(),
  images: z.array(z.string().url()),
});

const ProductsSchema = z.array(ProductSchema);

export type ProductStateType = z.infer<typeof ProductSchema>

export default ProductsSchema;
