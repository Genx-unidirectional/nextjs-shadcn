"use client";
import Accordion from "@/components/react/Accordion";
import GithubUser from "@/components/react/GithubUser";
import ImageSlider from "@/components/react/ImageSlider";
import LoadMore from "@/components/react/LoadMore";
import ModelPop from "@/components/react/ModelPop";
import QrCode from "@/components/react/QrCode";
import RandomColor from "@/components/react/RandomColor";
import ScrollIndicator from "@/components/react/ScrollIndicator";
import SearchAutoComplete from "@/components/react/SearchAutoComplete";
import StarRating from "@/components/react/StarRating";
import TabTest from "@/components/react/TabTest";
import TicTacToe from "@/components/react/TicTacToe";
import { FeatureContext } from "@/context";
import { useContext } from "react";

function Page() {
  const { loading, enabledFeatures } = useContext(FeatureContext);
  // From above context we get which information about which feature has to be enabled

  const componentArr = [
    // <Accordion />,
    // <RandomColor />,
    // <StarRating />,
    // <ImageSlider />,
    // <LoadMore />,
    // <QrCode />,
    // <ScrollIndicator />,
    // <TabTest />,
    // <ModelPop />,
    // <GithubUser />,
    // <SearchAutoComplete />,
    <TicTacToe />,
  ];

  const featuresArr = [
    {
      key: "Accordion",
      component: <Accordion />,
    },
    {
      key: "TicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "TabTest",
      component: <TabTest />,
    },
    {
      key: "RandomColor",
      component: <RandomColor />,
    },
    {
      key: "QrCode",
      component: <QrCode />,
    },
  ];
  // console.log(enabledFeatures.Accordion);
  // for (let component of featuresArr) {
  //   console.log(enabledFeatures[component.key as keyof typeof enabledFeatures]);
  // }
  return (
    <main className="h-full w-full overflow-hidden overflow-y-scroll bg-slate-800 text-white p-2">
      {featuresArr.map((feature) => {
        if (!enabledFeatures[feature.key as keyof typeof enabledFeatures]) {
          return null;
        }
        return (
          <div
            key={feature.key}
            className="h-full w-full  flex items-center justify-center"
          >
            {feature.component}
          </div>
        );
      })}
    </main>
  );
}
export default Page;
