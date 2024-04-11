import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RecipeNow } from "@/lib/types";
import { getRecipes } from "@/lib/data";
import { delay } from "@/lib/utils";
async function Recipe() {
  await delay(4000);
  const recipes = await getRecipes();
  return (
    <div className="min-h-screen p-3 w-full md:max-w-4xl mx-auto">
      <h2 className="font-bold text-3xl md:text-4xl text-center mb-4 tracking-tight">
        Recipes
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex flex-row gap-4 items-center">
              <Avatar>
                <AvatarImage src={`img/${recipe.image}`} alt="img" />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>{recipe.description}</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant={"default"}>View Recipe</Button>
              {recipe.vegan && <Badge variant={"outline"}>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Recipe;
