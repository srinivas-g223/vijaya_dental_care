import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Logo from "@/components/site/Logo";

export default function NotFound() {
  return (
    <div className="bg-page flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo />
      <h1 className="text-6xl font-extrabold tracking-tight text-white">404</h1>
      <p className="max-w-sm text-muted-foreground">
        That page seems to have slipped away. Let's get you back to a healthy smile.
      </p>
      <Link
        to="/"
        className="bg-aqua-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#062830] transition-transform duration-200 hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to Home
      </Link>
    </div>
  );
}
