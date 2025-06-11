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
          toastOptions={{
            classNames: {
              toast: "rounded-xl shadow-lg",
            }
          }}
        />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
