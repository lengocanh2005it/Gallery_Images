import React, { createContext } from "react";
import { Image } from "@/components/ImagesList";

export interface AppContextType {
  list: Image[];
  setList: React.Dispatch<React.SetStateAction<Image[]>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  isFind: boolean;
  setIsFind: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
