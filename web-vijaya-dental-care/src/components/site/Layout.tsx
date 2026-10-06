import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

/** Shared chrome for the single-page clinic website. */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-page flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
