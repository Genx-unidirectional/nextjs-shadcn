import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
function SkeletonCard() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-8">
      {"abscefigh".split("").map((recipe, idx) => (
        <Card key={idx} className="flex flex-col justify-between">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 flex-grow" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 flex-grow mt-4" />
            <Skeleton className="h-4 flex-grow mt-4" />
            <Skeleton className="h-4 w-1/2 mt-4" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="h-10 w-28" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
export default SkeletonCard;
