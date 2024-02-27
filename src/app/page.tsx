'use client'
import { SiteHeader } from "@/components/site-header";
import { GridItem } from "@/components/griditem";
import { Icons } from "@/components/icons";

const handleNotificationClick = () => {
  return true;
}
const notificationData = [
  {
    title: "Hunt",
    icon: Icons.hunt, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Sprint",
    icon: Icons.sprint, // Assuming you have different BellIcons for each
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Resale",
    icon: Icons.resale, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Developers",
    icon: Icons.dev,
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Just Curious",
    icon: Icons.justcurious, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "FAQ",
    icon: Icons.faq, //
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen mb-3 flex-col bg-background/75 items-center justify-self-auto ">
        <SiteHeader />
        <div className="grid grid-cols-2 md:w-2/3 min-h-screen flex-1">
      {notificationData.map((item, index) => (
        <GridItem
          key={index}
          title={item.title}
          // icon={item.icon}
          details={item.details}
          buttonLabel={item.buttonLabel}
          onClick={item.onClick}
          className="mt-8"
        />
      ))}
    </div>
        
    </main>
  );
}
