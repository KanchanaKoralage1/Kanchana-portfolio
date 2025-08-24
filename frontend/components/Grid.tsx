import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">

      <div className="mb-18 mt-10 text-center">
        <h1 className="heading">
           Get to Know {' '}
          <span className="text-purple-800">About Me</span>
        </h1>
      </div>
      <BentoGrid >
        
        {gridItems.map((item) => (
          
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            spareImg={item.spareImg}
            titleClassName={item.titleClassName}
            imgClassName={item.imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
