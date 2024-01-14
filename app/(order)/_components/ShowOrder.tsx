import { Product } from "@prisma/client";
import Image from "next/image";

interface ShowOrderProps {
  item: Product;
}
export default function ShowOrder({ item }: ShowOrderProps) {
  return (
    <div className="space-y-6 border py-2 lg:mx-0 mx-5 px-5 flex items-center justify-between">
      <div className="flex space-y-6 items-center justify-between">
        <div className="space-y-4 flex items-center justify-center space-x-4">
          <Image
            className="w-[100px] rounded-md object-center h-[100px] object-cover"
            src={item.imageUrl}
            alt={item.title}
            width={200}
            height={200}
          />
          <h3 className="max-w-[150px] line-clamp-2">{item.title}</h3>
        </div>
      </div> 
      <div className="flex items-center justify-center space-y-2">
        <p className="font-medium">${item.price}</p>
      </div>
    </div>
  );
}
