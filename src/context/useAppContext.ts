import { useContext } from "react";
import { AppContext, AppContextType } from "@/context/AppContext";

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error("Error!");
  return context;
};
