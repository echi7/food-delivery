import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Bear Restaurant",
  description: "Food served with drama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
          <div>
            <Notification />
            <Navbar />
            {children}
            <Footer />
            <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
          </div>
          </QueryProvider>
        </AuthProvider>
        </body>
    </html>
  );
}
