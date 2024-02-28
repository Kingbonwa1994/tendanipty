'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import Link from 'next/link';
import React from "react";
import { Icons } from "@/components/icons";
import { IconProps } from "@/components/icons";

interface GridItemProps {
  title: string;
  details: string;
  buttonLabel?: string;
  icon: (props: IconProps) => React.ReactElement;
  iconName: string;
  className?: string;
}
export function GridItem({ title, details, buttonLabel, icon, iconName}: GridItemProps) {
  const IconComponent = icon;

  return (
    <div className={`flex mx-2 mt-4 hover:bg-background/10 justify-between shadow shadow-[] flex-col items-center rounded-2xl space-x-4 py-2`}>
     

      <div className="">
        <h3 className="text-sm text-center text-foreground font-medium">{title}</h3>
        <div className="items-center">
          {IconComponent && <IconComponent iconName={iconName} className="h-24 w-24" />} {/* Render the SVG icon */}
      </div>
        <p className="text-sm text-muted dark:text-foreground">{details}</p>
      </div>

      {buttonLabel && (
        <Link href={`/${title}`} passHref>
          <Button
            className="text-sm bg-emerald-700 font-semibold text-foreground"
            variant="default" // Add the desired variant based on your styling
          >
            {buttonLabel}
          </Button>
        </Link>
      )}
    </div>
  );
}
