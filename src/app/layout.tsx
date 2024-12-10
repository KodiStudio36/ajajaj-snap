// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: "10px" }}>
              <main>
                {children}
              </main>
            </div>
            <Navbar />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
