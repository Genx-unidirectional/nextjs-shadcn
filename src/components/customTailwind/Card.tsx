type User = {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string;
  login: string;
  created_at: string;
};

function Card({
  avatar_url,
  followers,
  following,
  public_repos,
  name,
  login,
  created_at,
}: User) {
  return (
    <div className="bg-white w-[300px] gap-2 flex flex-col items-start  text-black p-4 rounded-lg">
      <div className="flex w-full items-center justify-between">
        <img src={avatar_url} alt={name} className="rounded-full w-[100px]" />
        <div className="flex gap-1 flex-col items-center">
          <p>Followers : {followers.toString()}</p>
          <p>Following : {following.toString()}</p>
        </div>
      </div>
      <p className="text-xl text-black font-medium">
        Repo created : {public_repos}
      </p>
      <p className="text-xl text-black font-medium">Joined at : {created_at}</p>
    </div>
  );
}
export default Card;
