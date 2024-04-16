import Accordion from "@/components/react/Accordion";
import ImageSlider from "@/components/react/ImageSlider";
import LoadMore from "@/components/react/LoadMore";
import RandomColor from "@/components/react/RandomColor";
import StarRating from "@/components/react/StarRating";

function Page() {
  const componentArr = [
    // <Accordion />,
    // <RandomColor />,
    <StarRating />,
    // <ImageSlider />,
    // <LoadMore />,
  ];
  return (
    <main className="h-full w-full overflow-hidden overflow-y-scroll bg-slate-800 text-white p-2">
      {componentArr.map((component, idx) => (
        <div
          key={idx}
          className="h-full w-full overflow-hidden flex items-center justify-center"
        >
          {component}
        </div>
      ))}
    </main>
  );
}
export default Page;
