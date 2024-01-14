import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen -mt-20 space-x-4">
    <Skeleton className="h-[400px] w-[300px] rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-[200px] w-[750px]" />
      <Skeleton className="h-[100px] w-[400px]" />
    </div>
  </div>
  );
}
