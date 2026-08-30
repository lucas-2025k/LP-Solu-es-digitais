import logo from "@/assets/lp-mark.png";
import { contato } from "@/config/contato";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo LP Soluções Digitais"
                width={277}
                height={256}
                className="h-9 w-auto object-contain mix-blend-multiply"
              />
              <span className="font-display text-sm font-semibold tracking-[0.16em] text-ink uppercase">
                LP Soluções Digitais
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Criação de sites e landing pages profissionais e personalizados para empresas que
              querem uma presença digital à altura do seu trabalho.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="eyebrow">Navegação</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Contato</p>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>
                  {contato.whatsapp ? (
                    <a
                      className="transition-colors hover:text-ink"
                      href={`https://wa.me/${contato.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  ) : (
                    <span className="text-muted-foreground">WhatsApp — a definir</span>
                  )}
                </li>
                <li>
                  {contato.instagram ? (
                    <a
                      className="transition-colors hover:text-ink"
                      href={`https://instagram.com/${contato.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  ) : (
                    <span className="text-muted-foreground">Instagram — a definir</span>
                  )}
                </li>
                <li>
                  {contato.email ? (
                    <a className="transition-colors hover:text-ink" href={`mailto:${contato.email}`}>
                      {contato.email}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">E-mail — a definir</span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LP Soluções Digitais. Todos os direitos reservados.</p>
          <p className="tracking-[0.18em] uppercase">Sites · Landing Pages · Design</p>
        </div>
      </div>
    </footer>
  );
}
