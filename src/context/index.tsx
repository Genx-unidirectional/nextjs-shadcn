// let's make context which provides object which has enabled features to the page

import { FeaturesType, dummyFeaturesApi } from "@/lib/utils";
import { createContext, useEffect, useState } from "react";

// interface ContextState  {
//     [index:string]:boolean
// }
type ContextState = {
  loading: boolean;
  enabledFeatures: FeaturesType;
};

const initState: ContextState = {
  loading: false,
  enabledFeatures: {
    Accordion: false,
    QrCode: false,
    RandomColor: false,
    TabTest: false,
    TicTacToe: false,
    HybridModel: false,
  },
};
export const FeatureContext = createContext<ContextState>(initState);

const FeaturesProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [enabledFeatures, setEnabledFeatures] = useState<FeaturesType>(
    initState.enabledFeatures
  );
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await dummyFeaturesApi();
        setEnabledFeatures(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFeatures();
  }, []);
  return (
    <FeatureContext.Provider value={{ loading, enabledFeatures }}>
      {children}
    </FeatureContext.Provider>
  );
};
export default FeaturesProvider;
