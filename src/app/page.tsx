'use client'
import { SiteHeader } from "@/components/site-header";
import { GridItem } from "@/components/griditem";

const handleNotificationClick = () => {
  return true;
}
const notificationData = [
  {
    title: "Notification Title 1",
    // icon: <BellIcon1 />, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Notification Title 2",
    // icon: <BellIcon2 />,
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Notification Title 1",
    // icon: <BellIcon1 />, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Notification Title 2",
    // icon: <BellIcon2 />,
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Notification Title 1",
    // icon: <BellIcon1 />, // Assuming you have different BellIcons for each item
    details: "Description for notification 1",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  {
    title: "Notification Title 2",
    // icon: <BellIcon2 />,
    details: "Description for notification 2",
    buttonLabel: "View Details",
    onClick: () => handleNotificationClick(),
  },
  // ... Repeat this structure for the remaining items
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background/75 items-center justify-self-auto ">
        <SiteHeader />
        <div className="grid grid-cols-2 md:w-2/3 min-h-screen flex-1">
      {notificationData.map((item, index) => (
        <GridItem
          key={index}
          title={item.title}
          icon={item.icon}
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
