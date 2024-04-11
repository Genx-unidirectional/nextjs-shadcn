import { RecipeNow } from "./types";
export async function getRecipes(): Promise<RecipeNow[]> {
  const result = await fetch("http://localhost:8001/recipes");
  return result.json();
}
