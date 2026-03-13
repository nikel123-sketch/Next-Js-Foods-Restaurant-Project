import Navber from "@/Component/Navber/Navber";
import "./globals.css";
import CartProvider from "@/contex/CartProvider";


export const metadata = {
  title: "Foods Resturent",
  description: "This is my Next.js foods website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
        <Navber></Navber>
        <main className="p-5">
        
      

        {children}
          
        </main>
      </CartProvider>
        </body>
    </html>
  );
}
