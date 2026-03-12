import Navber from "@/Component/Navber/Navber";
import "./globals.css";
import CartProvider from "@/contex/CartProvider";


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
        
      <CartProvider>

        {children}
      </CartProvider>
          
        </main>
        </body>
    </html>
  );
}
