import axios from "axios";
import { MouseEventHandler, useEffect, useState } from "react";
import Suggestion from "./Suggestion";

export type User = {
  id: number;
  firstName: string;
};
function SearchAutoComplete() {
  const [showUsers, setShowUsers] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<User[]>();
  useEffect(() => {
    const abortController = new AbortController();
    const fetchUser = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/users", {
          signal: abortController.signal,
        });
        console.log(result);
        setData([...result.data.users]);
        setShowUsers(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
    return () => abortController.abort();
  }, []);
  const handleClick: MouseEventHandler<HTMLLIElement> = (event) => {
    const target = event.target as HTMLLIElement;
    setQuery(target.innerText);
    setShowUsers(false);
  };
  const filteredData: User[] | undefined = data?.filter((user) =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filteredData); 
  return (
    <div className="h-full w-full flex flex-col p-2">
      <input
        type="text"
        name=""
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (query.length > 0) {
            setShowUsers(true);
          }
        }}
        className="p-2 w-full text-black rounded-lg"
      />
      {showUsers && query.length > 0 ? (
        <Suggestion data={filteredData!} handleClick={handleClick} />
      ) : null}
    </div>
  );
}
export default SearchAutoComplete;
