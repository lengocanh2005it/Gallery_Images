import React from "react";
import { AppProvider } from "@/context/AppProvider";

// components
import CategoryButtons from "@/components/CategoryButtons";
import Title from "@/components/Title";
import SearchIcons from "@/components/SearchIcons";
import ImagesList from "@/components/ImagesList";
import InputSearch from "@/components/InputSearch";

// animations
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="container mx-auto py-10 font-poppins flex flex-col gap-6">
        {/* Main header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col gap-10"
        >
          {/* Title */}
          <Title />

          {/* Search && category button */}
          <div className="flex flex-col gap-4 mx-auto relative">
            <div className="relative xl:w-[60%] w-[80%] mx-auto">
              <InputSearch />
              <SearchIcons />
            </div>

            <CategoryButtons />
          </div>
        </motion.div>

        {/* List Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 1.7,
              ease: "easeInOut",
            },
          }}
        >
          <ImagesList />
        </motion.div>
      </div>

      <div className="">
        <div className=""></div>
      </div>
    </AppProvider>
  );
};

export default App;
