import Accordion from "@/components/react/Accordion";

function Page() {
  const componentArr = [<Accordion />];
  return (
    <main className="h-full w-full overflow-hidden overflow-y-scroll flex items-center justify-center bg-slate-700 text-white p-2">
      {componentArr.map((component) => (
        <div className="h-full w-full flex items-center justify-center">
          {component}
        </div>
      ))}
    </main>
  );
}
export default Page;
