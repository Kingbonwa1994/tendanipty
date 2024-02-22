'use client'
import Image from "next/image";
import { Button } from "./ui/button";
interface GridItemProps {
    title: string;
    icon: string;
    details: string;
    buttonLabel?: string;
    onClick?: () => void;
  
    className?: string;
  }
  

export function GridItem({ title, icon, details, buttonLabel, onClick, className }: GridItemProps) {
    return (
      <div className="flex flex-col items-center rounded-2xl hover:bg-background/25 bg-primary dark:bg-primary-foreground space-x-4 py-2">
        <div>
        <Image src='/icon' width={50} height={50} alt="icon" />
        </div>
        <div className="text-center">{icon}</div>
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
  