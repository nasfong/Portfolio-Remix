import React from "react";


interface MyComponentProps {
  items: Array<{ alt: string; img: any }>
}

export const SkillList: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap">
      {items && items.map((val, indx) => {
        return (
          <div className="p-4" key={indx}>
            <img src={val?.img} alt={val?.alt} className="rounded-full w-auto max-h-20" />
          </div>
        );
      })}
    </div>
  );
};

