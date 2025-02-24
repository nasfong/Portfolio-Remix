import { Layers } from "lucide-react";
import Heading from "~/components/heading";
import Marquee from "~/components/magicui/marquee";
import ProjectCards from "~/components/project-card";
import { Badge } from "~/components/ui/badge";
import FramerWrapper from "~/components/ui/framer-wrapper";
import { cn } from "~/lib/utils";

import maxbit from "~/assets/image/maxbit.jpg"
import maxbit_pic1 from "~/assets/image/maxbit/1.jpg"
import maxbit_pic2 from "~/assets/image/maxbit/2.jpg"
import maxbit_pic3 from "~/assets/image/maxbit/3.jpg"
import maxbit_pic4 from "~/assets/image/maxbit/4.jpg"
import maxbit_pic5 from "~/assets/image/maxbit/5.jpg"


import finztrust from "~/assets/image/finztrust.jpg"
import finztrust_pic1 from "~/assets/image/finztrust/1.jpg"
import finztrust_pic2 from "~/assets/image/finztrust/2.jpg"

import rcimobile from "~/assets/image/rci-mobile.png"
import rci_pic1 from "~/assets/image/rci-mobile/1.jpg"
import rci_pic2 from "~/assets/image/rci-mobile/2.jpg"
import rci_pic3 from "~/assets/image/rci-mobile/3.jpg"
import rci_pic4 from "~/assets/image/rci-mobile/4.jpg"
import rci_pic5 from "~/assets/image/rci-mobile/5.jpg"

import sabay from "~/assets/image/sabay.jpg"
import sabay_pic1 from "~/assets/image/sabay/1.jpg"
import sabay_pic2 from "~/assets/image/sabay/2.jpg"
import sabay_pic3 from "~/assets/image/sabay/3.jpg"
import sabay_pic4 from "~/assets/image/sabay/4.jpg"
import sabay_pic5 from "~/assets/image/sabay/5.jpg"
import sabay_pic6 from "~/assets/image/sabay/6.jpg"

import cloud from "~/assets/image/cloud.png"
import cloud_pic1 from "~/assets/image/cloud/1.jpg"
import cloud_pic2 from "~/assets/image/cloud/2.jpg"

import maom from "~/assets/image/maom.png"
import maom_pic1 from "~/assets/image/maom/1.jpg"
import maom_pic2 from "~/assets/image/maom/2.jpg"
import maom_pic3 from "~/assets/image/maom/3.jpg"
import maom_pic4 from "~/assets/image/maom/4.jpg"


import motor from "~/assets/image/motor.png"
import motor_pic1 from "~/assets/image/motor/1.jpg"
import motor_pic2 from "~/assets/image/motor/2.jpg"
import motor_pic3 from "~/assets/image/motor/3.jpg"
import WordPullUp from "~/components/magicui/word-pull-up";

import system from "~/assets/image/system.png";


import { MetaFunction } from "@remix-run/react";

const Work_Project = [
  {
    Icon: maxbit,
    name: "HRMS User Management",
    description: "Company User Management System",
    position: "Frontend",
    tags: ["ReactJs", "Typescript", "Redux", "Bootstrap", "RestApi"],
    href: "",
    cta: "Private Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          maxbit_pic1,
          maxbit_pic2,
          maxbit_pic3,
          maxbit_pic4,
          maxbit_pic5,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: rcimobile,
    name: "Loan Mobile Application",
    description: "Mobile App for Loan Industry",
    position: "Frontend",
    tags: ["Vue", "Ionic", "Typescript", "i18n", "Graphql",],
    href: "",
    cta: "Private Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_10%,#000_80%)] "
      >
        {[
          rci_pic1,
          rci_pic2,
          rci_pic3,
          rci_pic4,
          rci_pic5,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: finztrust,
    name: "Loan Web Application",
    position: "Frontend",
    tags: ["ReactJs", "Typescript", "Redux", "i18n", "Graphql", "Material-UI"],
    description: "Web Application for Loan Industry",
    href: "",
    cta: "Private Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          finztrust_pic1,
          finztrust_pic2,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: sabay,
    name: "Entertainment and Cloud",
    description: "Entertainment and Cloud services.",
    position: "Frontend",
    tags: ["ReactJs", "Redux", "Cypress", "Graphql", "i18n", "Material-UI"],
    href: "https://mysabay.com",
    cta: "Visit Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          sabay_pic1,
          sabay_pic2,
          sabay_pic3,
          sabay_pic4,
          sabay_pic5,
          sabay_pic6,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: cloud,
    name: "Sabay Cloud",
    description: "Sabay Cloud Landing Page.",
    position: "Frontend",
    tags: ["ReactJs", "Material-UI"],
    href: "https://cloud.sabay.com/",
    cta: "Visit Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          cloud_pic1,
          cloud_pic2,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: system,
    name: "Coming Soon",
    description: "",
    position: "",
    tags: [],
    href: "",
    cta: "----",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          system,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
]

const Free_lancer = [
  {
    Icon: maom,
    name: "Maom Khmer Cuisine",
    description: "This food restaurant management system.",
    position: "FullStack",
    tags: ["ReactJs", "Typescript", "Tailwind", "Express", "RestApi"],
    href: "https://www.maomkhmercuisine.com/",
    cta: "Visit Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          maom_pic1,
          maom_pic2,
          maom_pic3,
          maom_pic4,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: motor,
    name: "Motor Store",
    description: "This motor store management system is designed for businesses.",
    position: "FullStack",
    tags: ["NextJs", "Typescript", "i18n", "RestApi", "Shadcn-UI", "Redis"],
    href: "https://www.kyhanmotorshop.store",
    cta: "Visit Project",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {[
          motor_pic1,
          motor_pic2,
          motor_pic3,
        ].map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-64 h-64 overflow-hidden rounded-xl border",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[0px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <img src={s} alt={s} />
          </figure>
        ))}
      </Marquee>
    ),
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Project - Samnang Tangfong" },
    { name: "description", content: "Welcome to Samnang Tangfong profile!" },
  ];
};

export default function Index() {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
        <WordPullUp
          className="text-xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-3xl md:leading-[5rem]"
          words="Work Projects"
        />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Work_Project.map((item, index) => <ProjectCards key={index} item={item} num={index} />)}
        </div>
        <WordPullUp
          className="text-xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-3xl md:leading-[5rem]"
          words="Freelance Projects"
        />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Free_lancer.map((item, index) => <ProjectCards key={index} item={item} num={index} />)}
        </div>
      </div>
    </div>
  )
}