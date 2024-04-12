import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Home>{children}</Home>
      </body>
    </html>
  );
}
