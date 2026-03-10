import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {StarsCanvas} from "./ui/StarsCanvas";



export const metadata = {
  title: "hurayracodes - MERN Stack Developer React Expert & JavaScript Expert | Portfolio",
  description: "I’m Abu Hurayra, a passionate Software Developer and Founder of Anthrolit. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
