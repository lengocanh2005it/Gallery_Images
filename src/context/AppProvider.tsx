import React, { ReactNode, useState } from "react";
import { Image } from "@/components/ImagesList";
import { AppContext, AppContextType } from "@/context/AppContext";

interface AppProviderProps {
  children: ReactNode;
}

// mock data
import { animals } from "@/mock/animal";
import { arts } from "@/mock/art";
import { humans } from "@/mock/human";
import { natures } from "@/mock/nature";
import { shuffleArray } from "@/utils/shuffleArray";

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [list, setList] = useState<Image[]>(
    shuffleArray([...animals, ...arts, ...humans, ...natures])
  );
  const [topic, setTopic] = useState<string>("All");
  const [isFind, setIsFind] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const values: AppContextType = {
    list,
    setList,
    topic,
    setTopic,
    isFind,
    setIsFind,
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
