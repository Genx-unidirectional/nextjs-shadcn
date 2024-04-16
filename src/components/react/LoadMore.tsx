"use client";
import { useEffect, useState } from "react";
import { ProductStateType } from "@/lib/validators";
import { cn } from "@/lib/utils";
function LoadMore() {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<ProductStateType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);
  let isDisabled = false;

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const result =
          await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}
        `);
        if (!result.ok) {
          throw new Error("Problem while fetching");
          setIsError(true);
        }

        const productArr = await result.json();
        console.log(productArr);
        if (!ignore) {
          if (data.length == 0) {
            setData([...productArr.products]);
          }
          if (data.length > 1) {
            setData((prev) => [...prev, ...productArr.products]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    setIsLoading(false);

    return () => {
      ignore = false;
    };
  }, [count]);
  console.log(data.length);
  if (data?.length === 100) isDisabled = true;
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-2  flex justify-between items-center border-b border-black">
        <h1 className="text-2xl py-2 md:text-4xl  font-bold text-black">
          Acme Products
        </h1>
        <nav className="space-x-1 ">
          <a className="font-medium text-slate-600 text-xl" href="#">
            About
          </a>
          <a className="font-medium text-slate-600 text-xl" href="#">
            Pricing
          </a>
          <a className="font-medium text-slate-600 text-xl" href="#">
            Fashion
          </a>
        </nav>
      </section>
      <main className="max-w-4xl min-h-full relative pt-[48.8px] mx-auto flex flex-col  items-center">
        {isLoading ? (
          <p className="text-black font-bold text-4xl">Loading...</p>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 p-8 lg:grid-cols-3 gap-8 ">
            {data?.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg mx-auto border border-black relative overflow-hidden"
              >
                <div className="w-full flex-grow">
                  <img
                    className="w-full mx-auto"
                    src={item.images[0]}
                    alt={item.title}
                  />
                </div>
                <div className="p-2">
                  <div className="flex flex-col items-start ">
                    <h2 className="text-black text-2xl font-medium">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 text-lg font-medium">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex w-full mt-2 justify-between items-baseline">
                    <div className="flex flex-col ">
                      <p>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(item.price)}
                      </p>
                      {/* <div className="flex gap-1 items-center">
                        {Array(item.rating)
                          .fill(null)
                          .map((_, idx) => (
                            <div key={idx} className="shape"></div>
                          ))}
                      </div> */}
                    </div>
                    <p className="text-red-500 font-bold text-lg">
                      Only {item.stock} left!
                    </p>
                    <div className="absolute top-0 right-0 rounded-bl-lg bg-yellow-300 text-red-600 font-bold text-sm p-[2px]">
                      {item.discountPercentage}% Discount
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="w-full  bottom-0 flex items-center justify-center">
          <button
            className={cn(
              "bg-black text-white py-1 px-2 font-medium text-xl rounded-lg",
              { "opacity-50": isDisabled }
            )}
            disabled={isDisabled}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Load More
          </button>
          {isDisabled ? <p>You have fetched 100 products</p> : null}
        </div>
      </main>
    </div>
  );
}
export default LoadMore;
