import "../globals.css";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pomidorro",
  description: "Pomidorro app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="flex z-0 fixed top-0 left-0 w-full h-full"
        >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 min-h-full min-w-full max-w-none z-0"
        >
          <source src="/videos/clouds.mp4" type="video/mp4" />
        </video>
        </div>
        {children}
      </body>
    </html>
  );
}
