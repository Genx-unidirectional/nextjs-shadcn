import { useEffect, useState } from "react";
import Card from "../customTailwind/Card";
import { UserType } from "@/lib/validators";
import axios from "axios";

function GithubUser() {
  const [user, setUser] = useState("Genx-unidirectional");
  const [userData, setUserData] = useState<UserType>();
  const [loading, setLoading] = useState(true);
  const fetchUser = async () => {
    try {
      const result = await axios.get(`https://api.github.com/users/${user}`);
      setLoading(false);
      setUserData({ ...result.data });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const handleClick = () => {
    fetchUser();
    setUser("");
  };

  return (
    <div className="min-h-screen w-full flex justify-center gap-2 items-center flex-col">
      <div className="flex gap-1 w-4/5">
        <input
          type="text"
          value={user}
          placeholder="enter username"
          onChange={(e) => setUser(e.target.value)}
          className="p-1 text-xl rounded-l-lg w-3/4 bg-white text-black"
        />
        <button
          onClick={handleClick}
          className="p-1 text-lg rounded-r-lg s-1/4 text-black bg-white"
        >
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : userData !== null ? (
        <Card
          avatar_url={userData?.avatar_url!}
          login={userData?.login!}
          followers={userData?.followers!}
          following={userData?.followers!}
          public_repos={userData?.public_repos!}
          created_at={userData?.created_at!}
          name={userData?.name!}
        />
      ) : null}
    </div>
  );
}
export default GithubUser;
