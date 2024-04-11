import SkeletonCard from "@/components/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";
function Loading() {
  return (
    <div className="min-h-screen p-3 w-full md:max-w-4xl mx-auto">
      <h2 className="font-bold text-3xl md:text-4xl text-center mb-4 tracking-tight">
        Recipes
      </h2>
      <SkeletonCard />
    </div>
  );
}
export default Loading;
