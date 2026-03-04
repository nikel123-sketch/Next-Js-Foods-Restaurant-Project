import Navber from "@/Component/Navber/Navber";
import "./globals.css";

export const metadata = {
  title: "foods project",
  description: "This is my Next.js foods website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navber></Navber>
        <main className="p-5">
        {children}
        </main>
        </body>
    </html>
  );
}
