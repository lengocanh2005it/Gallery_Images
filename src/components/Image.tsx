import React from "react";

interface ImageProps {
  image: string;
  name: string;
}

const Image: React.FC<ImageProps> = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full h-full relative group">
      <div className="w-full h-[280px] relative border border-black/10 rounded-[15px]">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full rounded-[15px] shadow-xl cursor-pointer opacity-85
          ease-in-out duration-300 transition-all group-hover:opacity-100"
        />
      </div>
      <h1
        className="xl:text-xl md:text-[18px] text-[16px] font-bold text-black/70 opacity-70 group-hover:opacity-100 ease-in-out
       duration-300 transition-all text-center"
      >
        {name}
      </h1>
    </div>
  );
};

export default Image;
