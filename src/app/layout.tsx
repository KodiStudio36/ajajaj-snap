// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "Ajajaj-Snap",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body style={{ margin: 0, height: '100vh' }}>
        <AuthProvider>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar/> {/* Navbar stays at the bottom */}
        </AuthProvider>
      </body>
    </html>
  );
}
