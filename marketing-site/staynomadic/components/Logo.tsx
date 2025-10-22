import * as React from "react";
import { MapPin } from "lucide-react";

type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`} aria-label="StayNomadic">
      <div
        aria-hidden
        className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-gradient"
      >
        <MapPin className="h-3.5 w-3.5 text-white" strokeWidth={2.2} />
      </div>
      <span className="text-base font-semibold tracking-tight">
        StayNomadic
      </span>
    </div>
  );
}

export default Logo;
