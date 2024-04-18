import Tabs from "./Tabs";

function RandomComponent() {
  return <h2>Here is random component</h2>;
}

function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  return <Tabs tabContent={tabs} />;
}
export default TabTest;
