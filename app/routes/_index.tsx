import type { MetaFunction } from "@remix-run/node";
import { useTheme } from "next-themes";
import { MagicCard } from "~/components/magicui/magic-card";
import profile from "~/assets/image/nasfong.jpg"

export const meta: MetaFunction = () => {
  return [
    { title: "Samnang Tangfong Portfolio" },
    { name: "description", content: "Welcome to Samnang Tangfong profile!" },
  ];
};

export default function Index() {
  const { theme } = useTheme()
  return (
    <div>
      <main className="">
        <MagicCard
          className="bg-gradient-to-br from-white/40 to-gray-100/10 rounded-[20px] border border-white/18 border-b-0 border-r-0 shadow-lg p-5"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          {/* <div className='flex items-center gap-x-5'>
            <img
              src={profile}
              className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full border-white border object-cover'
              alt="nasfong profile"
            />
            <div className="">
              <div>Created by: <span className='font-bold'>NasFong</span> </div>
              <div>Phone number: <span className='font-bold'>+855 93 292 931</span> </div>
              <div className="">Email: <span className='font-bold'>fongren007@gmail.com</span> </div>
            </div>
          </div> */}
          <div className="flex">
            <div>
              <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
              <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl">
                Samnang <br /> Tangfong.
              </h1>
              <h2 className="font-poppins text-3xl text-gray-500 max-sm:text-2xl">
                Web Base Developer
              </h2>
            </div>
            <img
              src={profile}
              className="border-white border object-cover"
              alt="Samnang Tangfong profile"
            />
          </div>
          {/* <TextRotator /> */}

        </MagicCard>
      </main>
    </div>
  );
}

