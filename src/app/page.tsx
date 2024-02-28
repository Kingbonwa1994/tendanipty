'use client'
import { SiteHeader } from "@/components/site-header";
import { GridItem } from "@/components/griditem";
import { Icons } from "@/components/icons";
import React from "react";

const handleNotificationClick = () => {
  return true;
}
const notificationData = [
  {
    title: "hunt",
    icon: Icons.hunt, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "sprint",
    icon: Icons.sprint, // Assuming you have different BellIcons for each
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "resale",
    icon: Icons.resale, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "developers",
    icon: Icons.dev,
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "justcurious",
    icon: Icons.justcurious, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "faq",
    icon: Icons.faq, //
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen mb-3 flex-col bg-background items-center justify-self-auto ">
        <SiteHeader />
        <div className="grid grid-cols-2 md:w-2/3 min-h-screen flex-1">
      {notificationData.map((item, index) => (
        <GridItem
        key={index}
            title={item.title}
            details={item.details}
            buttonLabel={item.buttonLabel}
            icon={Icons[item.iconName]}
            iconName={item.iconName}
            className="mt-8"
        />
      ))}
    </div>
        
    </main>
  );
}
