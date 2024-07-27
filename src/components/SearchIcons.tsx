import { SearchIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SearchIcons = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SearchIcon className="absolute top-[25%] right-3 cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Search Image</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SearchIcons;
