import type { Metadata } from "next";
import "./globals.css";
import AppFooter from "@/components/AppFooter";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "New Yam Music Festival",
  description: "Experience the best music festival in Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="antialiased">
        <div className="flex flex-col gap-20 justify-between">
          <main>
            <Provider>{children}</Provider>
          </main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
