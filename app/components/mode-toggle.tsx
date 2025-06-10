import { forwardRef } from "react";
import { Button } from "~/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";

// ForwardRef version of ModeToggle
export const ModeToggle = forwardRef<HTMLButtonElement, { className?: string }>(
  ({ className }, ref) => {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className={cn("px-2", className)}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ref={ref} // Pass ref to Button
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} // Accessibility enhancement
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    );
  }
);

// Optional displayName for easier debugging
ModeToggle.displayName = "ModeToggle";
