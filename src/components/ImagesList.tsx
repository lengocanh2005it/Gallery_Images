// data images
import React from "react";
import Image from "@/components/Image";
import { useAppContext } from "@/context/useAppContext";

export interface Image {
  image: string;
  name: string;
}

// icons
import { LoaderIcon } from "lucide-react";

const ImagesList: React.FC = () => {
  const { list, topic, isFind, isLoading } = useAppContext();
  return (
    <div className="w-full h-full">
      {isLoading === false ? (
        <>
          {isFind === true ? (
            <React.Fragment>
              <h1 className="text-center xl:text-3xl md:text-3xl text-2xl font-semibold text-black/70">
                {topic + " Pictures"}
              </h1>
              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-12 md:gap-10 gap-4 w-full relative xl:p-4 p-2 pt-6">
                {list.map((image, index) => (
                  <Image image={image.image} name={image.name} key={index} />
                ))}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                <h1 className="text-center xl:text-4xl md:text-4xl text-3xl font-bold mt-10">
                  Not Found
                </h1>
                <div className="relative xl:w-[40%] md:w-[50%] w-[90%] h-[40%]">
                  <img
                    src="/not-found-1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </>
      ) : (
        <>
          <div className="flex gap-4 items-center justify-center h-full w-full text-4xl mt-10">
            <h1 className="font-medium text-black/80">Loading</h1>
            <LoaderIcon size={70} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImagesList;
