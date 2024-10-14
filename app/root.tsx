import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import DockDemo from "./components/example/dock-demo";
import { ThemeProvider } from "next-themes";
import { cn } from "./lib/utils";
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main
          className={cn(
            "flex screen break-words min-h-screen items-center justify-between pt-14 pb-28 px-40 max-md:p-4 bg-transparent max-sm:pt-20 max-sm:pb-32 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:32px_32px] ",
            { "blur-sm": navigation.state === "loading" }
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            <DockDemo />
          </ThemeProvider>
        </main>

        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
