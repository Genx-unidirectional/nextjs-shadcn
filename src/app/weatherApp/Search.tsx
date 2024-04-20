import { Dispatch, SetStateAction } from "react";

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
};

function Search({ search, handleSearch, setSearch }: Props) {
  return (
    <div className="w-3/4 md:w-2/4 lg:w-1/3 mx-auto gap-[2px] flex">
      <input
        className="w-3/4 p-1 text-black bg-white border border-black rounded-l-lg"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white font-medium text-xl p-1 rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
}
export default Search;
