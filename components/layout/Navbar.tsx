"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Responsive site navigation. Client component because it tracks
 * scroll position (for the translucent -> solid background transition)
 * and the open/closed state of the mobile menu.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes. Adjusting state
  // during render (React's recommended pattern) instead of in an effect
  // avoids an extra commit/cascading render.
  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setOpen(false);
  }

  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/60 to-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-serif text-2xl tracking-wide transition-colors",
            solid ? "text-charcoal" : "text-cream"
          )}
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                  solid
                    ? "text-ink hover:text-clay"
                    : "text-cream/90 hover:text-cream",
                  active && (solid ? "text-clay" : "text-cream")
                )}
              >
                {item.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px",
                      solid ? "bg-clay" : "bg-cream"
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="md" variant={solid ? "primary" : "outline"}>
            Contact
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
            solid ? "text-charcoal" : "text-cream"
          )}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden bg-cream shadow-lg transition-[max-height] duration-300 ease-out md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-sand-dark/60 py-3 text-base font-medium text-ink last:border-none"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" size="md" className="mt-4 w-full">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}
