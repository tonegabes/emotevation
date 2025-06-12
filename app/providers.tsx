"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
        <Toaster 
          position="top-center" 
          richColors 
          closeButton
          expand
          theme="system"
          duration={4000}
          visibleToasts={3}
          hotkey={['altKey', 'KeyQ']}
          toastOptions={{
            classNames: {
              toast: "rounded-xl shadow-lg backdrop-blur-md",
              title: "font-medium",
              description: "text-sm opacity-90",
              actionButton: "bg-primary-500",
            }
          }}
        />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
