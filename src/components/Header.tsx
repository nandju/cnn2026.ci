"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { CTAButton } from "./CTAButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/80 backdrop-blur-xl">
      <div className="container-cnn flex h-20 items-center justify-between gap-6">
        <Link href="/" className="font-[var(--font-space)] text-2xl font-black tracking-tight">
          CNN <span className="text-orange">2026</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-neon">
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-2xl border border-white/10 bg-panel p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block rounded-xl px-4 py-3 text-sm text-muted transition hover:bg-white/10 hover:text-neon">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-neon">
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <CTAButton />
        </div>
        <button onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/15 p-3 text-white lg:hidden" aria-label="Ouvrir le menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-charcoal lg:hidden">
          <div className="container-cnn grid gap-2 py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[.03]">
                  <button onClick={() => setActive(active === item.label ? null : item.label)} className="flex w-full items-center justify-between px-4 py-4 text-left font-bold">
                    {item.label}
                    <ChevronDown className={active === item.label ? "rotate-180 transition" : "transition"} size={16} />
                  </button>
                  {active === item.label ? (
                    <div className="grid gap-1 px-2 pb-2">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-muted hover:bg-white/10 hover:text-neon">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 bg-white/[.03] px-4 py-4 font-bold">
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-3">
              <CTAButton />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
