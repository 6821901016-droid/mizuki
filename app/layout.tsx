import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout"> 
        <Navbar />
        <div className="main-content">
           {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}