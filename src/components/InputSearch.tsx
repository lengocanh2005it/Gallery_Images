import { Image } from "@/components/ImagesList";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/useAppContext";
import { animals } from "@/mock/animal";
import { arts } from "@/mock/art";
import { humans } from "@/mock/human";
import { natures } from "@/mock/nature";
import { shuffleArray } from "@/utils/shuffleArray";

const handleSearch = (
  array: Image[],
  value: string,
  setList: React.Dispatch<React.SetStateAction<Image[]>>,
  setIsFind: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const arrayFilter: Image[] = array.filter((item) =>
    item.name.toLowerCase().trim().includes(value.toLowerCase().trim())
  );
  setList(arrayFilter);
  if (arrayFilter.length === 0) {
    setIsFind(false);
  } else {
    setIsFind(true);
  }
};

const handleChangeInput = (
  topic: string,
  value: string,
  setList: React.Dispatch<React.SetStateAction<Image[]>>,
  setIsFind: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const topicsMap: { [key: string]: Image[] } = {
    Animal: animals,
    Art: arts,
    Human: humans,
    Nature: natures,
    All: shuffleArray([...animals, ...arts, ...humans, ...natures]),
  };

  const list = topicsMap[topic];
  if (list) {
    handleSearch([...list], value, setList, setIsFind);
  }
};

const InputSearch = () => {
  const { topic, setList, setIsFind } = useAppContext();
  return (
    <Input
      className="w-full pr-[40px] search"
      placeholder="Search name..."
      onChange={(e) => {
        handleChangeInput(topic, e.target.value, setList, setIsFind);
      }}
    />
  );
};

export default InputSearch;
