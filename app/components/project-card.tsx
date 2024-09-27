import FramerWrapper from "./ui/framer-wrapper";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import { memo, ReactNode } from "react";

interface ProjectCardProps {
  item: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
    position: string
    tags: string[]
  };
  num: number
}
const ProjectCards = ({ item, num }: ProjectCardProps) => {
  return (
    <FramerWrapper className="" y={0} scale={0.8} delay={num / 3} duration={0.15}>
      <BentoGrid>
        <BentoCard  {...item} />
      </BentoGrid>
    </FramerWrapper>
  );
};

export default memo(ProjectCards);
