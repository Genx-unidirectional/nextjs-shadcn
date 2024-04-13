import { RecipeNow } from "./types";
export async function getRecipes(): Promise<RecipeNow[]> {
  const result = await fetch("http://localhost:8001/recipes");
  return result.json();
}

export type Data = {
  id: number;
  question: string;
  answer: string;
}[];

export const QNA_DATA: Data = [
  { id: 1, question: "What is your name?", answer: "My name is John." },
  { id: 2, question: "Where are you from?", answer: "I am from New York." },
  {
    id: 3,
    question: "What is your favorite color?",
    answer: "My favorite color is blue.",
  },
  { id: 4, question: "How old are you?", answer: "I am 25 years old." },
];
