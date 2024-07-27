import { Image } from "@/components/ImagesList";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// mock data
import { animals } from "@/mock/animal";
import { arts } from "@/mock/art";
import { humans } from "@/mock/human";
import { natures } from "@/mock/nature";
import { shuffleArray } from "@/utils/shuffleArray";
import { useAppContext } from "@/context/useAppContext";

interface ButtonsTypes {
  name: string;
  id: string;
}

const buttons: ButtonsTypes[] = [
  { name: "All", id: "All" },
  { name: "Animal", id: "Animal" },
  { name: "Art", id: "Art" },
  { name: "Human", id: "Human" },
  { name: "Nature", id: "Nature" },
];

const handleSlowAnimation = (
  setList: React.Dispatch<React.SetStateAction<Image[]>>,
  array: Image[]
) => {
  setTimeout(() => {
    setList(array);
  }, 1000);
};

const handleClick = (
  setTopic: React.Dispatch<React.SetStateAction<string>>,
  buttonName: string,
  setList: React.Dispatch<React.SetStateAction<Image[]>>,
  setActiveButtonId: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFind: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const topicsMap: { [key: string]: Image[] } = {
    Animal: animals,
    Art: arts,
    Human: humans,
    Nature: natures,
    All: [...animals, ...arts, ...humans, ...natures],
  };
  const list =
    buttonName === "All"
      ? shuffleArray(topicsMap[buttonName])
      : topicsMap[buttonName];

  setIsLoading(true);

  setTimeout(() => {
    setTopic(buttonName);
    setActiveButtonId(buttonName);
    setIsLoading(false);
    const input = document.querySelector<HTMLInputElement>(".search");
    if (input) input.value = "";
    setIsFind(true);
  }, 1000);
  handleSlowAnimation(setList, [...list]);
};

const CategoryButtons: React.FC = () => {
  const { setList, setTopic, setIsLoading, setIsFind } = useAppContext();
  const [activeButtonId, setActiveButtonId] = useState<string>("All");

  return (
    <div className="xl:flex md:flex grid grid-cols-3 gap-2">
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            className={`w-[100px] ease-in-out duration-300 transition-all ${
              activeButtonId === button.id
                ? "bg-red-500 hover:bg-red-600"
                : "bg-primary"
            }`}
            id={button.id}
            onClick={() => {
              handleClick(
                setTopic,
                button.name,
                setList,
                setActiveButtonId,
                setIsLoading,
                setIsFind
              );
            }}
          >
            {button.name}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryButtons;
