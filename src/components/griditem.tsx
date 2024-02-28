'use client'
import Image from "next/image";
import { Button } from "./ui/button";
interface GridItemProps {
    title: string;
    details: string;
    buttonLabel?: string;
    onClick?: () => void;
    className?: string;
  }
  

export function GridItem({ title, details, buttonLabel, onClick, className }: GridItemProps) {
    return (
      <div className="flex mx-2 mt-4 hover:bg-background/10 justify-between shadow shadow-[] flex-col items-center rounded-2xl space-x-4 py-2">
        <div className="items-center">
              </div>
        
        <div className="">
          <h3 className="text-sm text-center text-foreground font-medium">{title}</h3>
          <p className="text-sm text-muted dark:text-foreground ">{details}</p>
        </div>
        {buttonLabel && (
          <Button className="text-sm bg-emerald-700 font-semibold text-foreground" onClick={onClick}>
            {buttonLabel}
          </Button>
        )}
      </div>
    );
  }
  