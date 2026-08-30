import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/lp-mark.png";
import { whatsappHref } from "@/config/contato";
import { cn } from "@/lib/utils";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="LP Soluções Digitais">
          <img
            src={logo}
            alt="Logo LP Soluções Digitais"
            width={277}
            height={256}
            className="h-9 w-auto object-contain mix-blend-multiply"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-semibold tracking-[0.16em] text-ink uppercase">
              LP Soluções
            </span>
            <span className="mt-1 text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
              Digitais
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref()}
            target={whatsappHref().startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="hidden rounded-sm bg-primary px-5 py-3 text-xs font-semibold tracking-[0.12em] text-primary-foreground uppercase transition-all duration-300 hover:bg-accent sm:inline-flex"
          >
            Solicitar orçamento
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-line bg-background transition-[max-height] duration-400 lg:hidden",
          open ? "max-h-[26rem]" : "max-h-0 border-t-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-4 text-sm tracking-wide text-ink-soft last:border-b-0 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref()}
            target={whatsappHref().startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 mb-2 rounded-sm bg-primary px-5 py-4 text-center text-xs font-semibold tracking-[0.12em] text-primary-foreground uppercase"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
