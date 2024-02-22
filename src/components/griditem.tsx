'use client'
import Image from "next/image";

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
      <div className="flex flex-col my-2 items-center rounded-2xl hover:bg-background/95 bg-background space-x-4 py-2">
        <div>
        <Image src='/icon' width={50} height={50} alt="icon" />
        </div>
        <div className="text-center">{icon}</div>
        <div className="flex-1 space-y-2">
          <h3 className="text-sm text-center text-foreground font-medium">{title}</h3>
          <p className="text-sm text-muted dark:text-foreground ">{details}</p>
        </div>
        {buttonLabel && (
          <button className="text-sm bg- font-semibold text-foreground hover:underline" onClick={onClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    );
  }
  