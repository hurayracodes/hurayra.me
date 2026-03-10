"use client";
import React from "react";
import ProfileCard from "../ui/ProfileCard";

function About() {
  return (
    <div className="relative pt-10 overflow-hidden">
      <canvas
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 text-white pt-20 pb-12 lg:pt-0 lg:pb-0">
        <ProfileCard
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/assets/2.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          behindGlowEnabled
           reduceShine={true}  // Shine effect kam
        reduceGlare={true}
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </section>
    </div>
  );
}

export default About;
