"use client";
import { Mail, Workflow, Contact2, MemoryStickIcon, Star } from "lucide-react";
import { ExpandableTabs } from "../ui/ExpandableTabs";

function Navigation() {
  const tabs = [
    { title: "About", icon: Contact2 },
    { title: "Experience", icon: MemoryStickIcon },
    { title: "Projects", icon:  Workflow},
    { title: "Feedback", icon: Star },
    { title: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed w-full h-full inset-0 z-50 justify-end flex items-end pointer-events-none">
      <div className="pointer-events-auto p-8 max-w-md mx-auto
       w-full">
        <div className="flex flex-col items-center gap-6">
          <ExpandableTabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default Navigation;