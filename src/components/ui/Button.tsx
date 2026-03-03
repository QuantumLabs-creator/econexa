"use client";

import Link from "next/link";
import { cn } from "@/src/lib/utils";

type Props = {
  href?: string;
  variant?: "primary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ href, variant = "primary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-[rgb(var(--brand))] text-white hover:opacity-90 focus:ring-[rgb(var(--brand))] focus:ring-offset-white"
      : "bg-transparent text-slate-800 hover:bg-slate-100 focus:ring-slate-300 focus:ring-offset-white";

  if (href) {
    return (
      <Link className={cn(base, styles, className)} href={href}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles, className)} {...props} />
  );
}