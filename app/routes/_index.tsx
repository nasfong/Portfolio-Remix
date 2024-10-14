import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import profile from "~/assets/image/nasfong.jpg"
import { Icons } from "~/components/example/dock-demo";
import { Button } from "~/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

const socials = [
  {
    label: "GitHub",
    url: "https://github.com/nasfong",
    icon: Icons.github,
    color: "#151b23",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/samnang-tangfong-00a928229/",
    icon: Icons.linkedin,
    color: "#0867c2",
  },
  {
    label: "Telegram",
    url: "https://t.me/nasfong",
    icon: Icons.telegram,
    color: "#34aae4",
  },
]

export const meta: MetaFunction = () => {
  return [
    { title: "Samnang Tangfong Portfolio" },
    { name: "description", content: "Welcome to Samnang Tangfong profile!" },
  ];
};

export default function Index() {
  return (
    <main className="w-full bg-gradient-to-br from-white/40 to-gray-100/10 rounded-[20px] border border-white/18 border-b-0 border-r-0 shadow-lg p-5 relative">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <h3 className="font-poppins text-2xl sm:text-xl md:text-3xl lg:text-4xl">
              My Name is
            </h3>
            <h1 className="font-rubik text-6xl sm:text-5xl md:text-7xl lg:text-8xl name_underline text-primary">
              Samnang <br /> Tangfong
            </h1>
            <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-500">
              Web Base Developer
            </h2>
          </div>
          <div className="flex gap-3">
            <TooltipProvider>
              {socials.map((item, index) => (
                <Tooltip delayDuration={0.5} key={index}>
                  <TooltipTrigger asChild>
                    <Link to={item.url}>
                      <item.icon className="size-8 sm:size-12" style={{ color: item.color }} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
        <div className="">
          <img
            src={profile}
            className="border-white border object-cover h-full w-full "
            alt="Samnang Tangfong profile"
          />
        </div>
      </div>
      {/* <TextRotator /> */}

    </main>
  );
}

