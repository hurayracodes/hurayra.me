import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";



export const metadata = {
  title: "hurayracodes - MERN Stack Developer React Expert & JavaScript Expert | Portfolio",
  description: "I’m Abu Hurayra, a passionate Software Developer and Founder of Anthrolit. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {/* <StarsCanvas /> */}
        {children}
        <Toaster 
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
