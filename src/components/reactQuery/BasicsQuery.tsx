import {
  QueryClient,
  useQuery,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
function BasicsQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
export default BasicsQuery;

function Example() {
  const { error, data, isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });
  if (isPending) return <p className="text-black font-bold">Loading...</p>;

  if (error) return <p>{`An error has occurred:  ${error.message}`}</p>;

  return (
    <div className="text-black font-bold">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
