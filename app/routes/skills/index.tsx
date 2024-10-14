import type { MetaFunction } from "@remix-run/node";

import html from "~/assets/image/html.png";
import css from "~/assets/image/css.png";
import scss from "~/assets/image/scss.png";
import js from "~/assets/image/js.png";
import ts from "~/assets/image/typescript.png";
import react from "~/assets/image/react.png";
import nextjs from "~/assets/image/nextjs.jpeg";
import tailwind from "~/assets/image/tailwindcss.png";
import github from "~/assets/image/github.png";
import vscode from "~/assets/image/vscode.png";
import cypress from "~/assets/image/cypress.png";
import FramerWrapper from "~/components/ui/framer-wrapper";
import { Badge } from "~/components/ui/badge";
import { Lightbulb } from "lucide-react";
import { SkillList } from "~/components/skill-list";
import Heading from "~/components/heading";

export const meta: MetaFunction = () => {
  return [
    { title: "Skill - Samnang Tangfong" },
    { name: "description", content: "Welcome to Samnang Tangfong profile!" },
  ];
};

export default function Index() {
  const language = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "ts", img: ts },
  ];
  const framework = [
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "scss", img: scss },
    { alt: "tailwind", img: tailwind },
    { alt: "cypress", img: cypress },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
  ];
  return (
    <div className="flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Currently i am a fresher and i have a solid understand of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using Javascript,
            Typescript, React, Nextjs & Node.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.3} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="flex-row flex">
            <SkillList items={language} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="flex-row flex">
            <SkillList items={framework} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
}
