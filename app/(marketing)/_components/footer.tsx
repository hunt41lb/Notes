import { Button } from "@/components/ui/button"

import { Logo } from "./logo"

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#030712]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <a href="https://github.com/hunt41lb/Notes" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="sm">
            Github
          </Button>
        </a>
        <a href="https://ndit.services" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="sm">
            Home
          </Button>
        </a>
      </div>
    </div>
  );
};