import { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import { WeatherData } from "@/types/weather";

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState<WeatherData>();
  const fetchWeather = async (params: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=bceeebbf04ebcdac0b784901914b1f99`
      );
      setWeather(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearch = () => {
    fetchWeather(search);
    setSearch("");
  };
  useEffect(() => {
    fetchWeather("bangalore");
  }, []);
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <>
      <header className="w-full  flex justify-center items-center bg-white border-b absolute top-0 border-slate-700 p-3">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </header>
      <main className="mt-[60.8px] h-screen flex justify-center items-center max-w-4xl mx-auto">
        <section className="border p-2 border-b border-black rounded-lg w-3/4 lg:w-2/5 md:w-1/2">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <h2 className="text-black  font-bold  text-2xl md:text-3xl">
                {weather?.name},
              </h2>
              <p className="text-lg text-slate-600 font-medium md:text-xl">
                {weather?.sys.country}
              </p>
            </div>
            <p className="text-slate-800 text-sm ">{getCurrentDate()}</p>
          </div>
          <div className="flex justify-center my-10 items-center">
            <p className="text-8xl">🌞</p>
            <h3 className="text-3xl font-medium text-black">
              {(weather?.main.temp! - 273).toFixed(1)}&deg;C
            </h3>
          </div>
          <div className="w-full justify-between flex">
            <div className="flex flex-col items-center">
              <p className="text-xl text-slate-700 tracking-tighter font-medium">
                {weather?.wind.speed}🎐
              </p>
              <p className="text-xl text-black ">Wind Speed</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl text-slate-700 tracking-tighter font-medium">
                {weather?.main.humidity}%
              </p>
              <p className="text-xl text-black ">Humidity</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Weather;
