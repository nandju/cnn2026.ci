"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { AnnouncementBar } from "./countdown/AnnouncementBar";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [desktopActive, setDesktopActive] = useState<string | null>(null);

  return (
    <header onMouseLeave={() => setDesktopActive(null)} className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl">
      <AnnouncementBar />
      <div className="container-cnn flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logoNormal}
            alt="CNN 2026"
            width={80}
            height={80}
            className="h-20 w-20 object-contain"
            priority
          />
          {/* <span className="font-[var(--font-space)] text-2xl font-black tracking-tight text-ink">
            CNN <span className="text-orange">2026</span>
          </span> */}
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} onMouseEnter={() => setDesktopActive(item.label)} className="relative">
                <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-ink/5 hover:text-orange">
                  {item.label}
                  <ChevronDown className={desktopActive === item.label ? "rotate-180 opacity-100 transition" : "opacity-0 transition"} size={14} />
                </button>
                {desktopActive === item.label ? (
                  <div className="absolute left-0 top-full w-72 pt-3">
                    <div className="rounded-2xl border border-line bg-white p-2 shadow-soft">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block rounded-xl px-4 py-3 text-sm text-muted transition hover:bg-ink/5 hover:text-orange">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:bg-ink/5 hover:text-orange">
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          <CTAButton />
        </div>
        <button onClick={() => setOpen((value) => !value)} className="rounded-full border border-line p-3 text-ink lg:hidden" aria-label="Ouvrir le menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-cnn grid gap-2 py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-2xl border border-line bg-cloud">
                  <button onClick={() => setActive(active === item.label ? null : item.label)} className="flex w-full items-center justify-between px-4 py-4 text-left font-bold text-ink">
                    {item.label}
                    <ChevronDown className={active === item.label ? "rotate-180 transition" : "transition"} size={16} />
                  </button>
                  {active === item.label ? (
                    <div className="grid gap-1 px-2 pb-2">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-muted hover:bg-ink/5 hover:text-orange">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-line bg-cloud px-4 py-4 font-bold text-ink">
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
