import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
} from "lucide-react";

import { ContatoForm } from "@/components/site/ContatoForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contato, whatsappHref } from "@/config/contato";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LP Soluções Digitais | Sites e Landing Pages Profissionais" },
      {
        name: "description",
        content:
          "Criamos sites e landing pages profissionais e personalizados para empresas que desejam fortalecer sua presença digital.",
      },
      {
        property: "og:title",
        content: "LP Soluções Digitais | Sites e Landing Pages Profissionais",
      },
      {
        property: "og:description",
        content:
          "Criamos sites e landing pages profissionais e personalizados para empresas que desejam fortalecer sua presença digital.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "LP Soluções Digitais | Sites e Landing Pages Profissionais",
      },
      {
        name: "twitter:description",
        content:
          "Sites e landing pages profissionais e personalizados para empresas que querem uma presença digital sólida.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "LP Soluções Digitais",
          description:
            "Criação de sites institucionais e landing pages profissionais e personalizados para empresas.",
          areaServed: "BR",
          serviceType: ["Criação de sites", "Landing pages", "Design personalizado"],
        }),
      },
    ],
  }),
});

const servicos = [
  {
    icon: Layers,
    titulo: "Landing Pages",
    texto:
      "Páginas desenvolvidas para apresentar empresas, serviços, produtos e campanhas de forma estratégica e profissional.",
  },
  {
    icon: MonitorSmartphone,
    titulo: "Sites Institucionais",
    texto:
      "Sites completos para empresas que desejam apresentar sua marca, seus serviços, diferenciais e informações de contato.",
  },
  {
    icon: PenTool,
    titulo: "Design Personalizado",
    texto:
      "Cada projeto é desenvolvido de acordo com a identidade e necessidades da empresa, evitando resultados genéricos.",
  },
];

const diferenciais = [
  "Design personalizado",
  "Desenvolvimento profissional",
  "Responsividade para celular e computador",
  "Estrutura pensada para conversão",
  "Identidade visual alinhada à empresa",
  "Comunicação clara",
  "Atendimento próximo e personalizado",
];

const etapas = [
  {
    numero: "01",
    titulo: "Entendimento",
    texto: "Conhecemos a empresa, seus serviços, público e objetivos.",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    texto: "Definimos a estrutura e a direção visual do projeto.",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento",
    texto: "Criamos a página com design personalizado e responsivo.",
  },
  {
    numero: "04",
    titulo: "Ajustes",
    texto: "O cliente analisa o projeto e são realizados os ajustes necessários.",
  },
  {
    numero: "05",
    titulo: "Entrega",
    texto: "O projeto é finalizado e preparado para publicação.",
  },
];

const projetos = [
  { titulo: "Projeto em breve", tipo: "Landing Page" },
  { titulo: "Projeto em breve", tipo: "Site Institucional" },
  { titulo: "Projeto em breve", tipo: "Página de Campanha" },
];

const faq = [
  {
    pergunta: "Quanto tempo leva para criar um site?",
    resposta:
      "O prazo médio para desenvolvimento é de 3 a 5 dias, dependendo da complexidade do projeto e dos ajustes necessários.",
  },
  {
    pergunta: "O site é personalizado?",
    resposta:
      "Sim. Cada projeto é desenvolvido de acordo com a identidade, necessidades e objetivos da empresa.",
  },
  {
    pergunta: "O site funciona no celular?",
    resposta:
      "Sim. Todos os projetos são responsivos e adaptados para celulares, tablets e computadores.",
  },
  {
    pergunta: "Posso solicitar alterações?",
    resposta: "Sim. O projeto passa por uma etapa de análise e ajustes antes da entrega final.",
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors duration-300 hover:bg-accent";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-input px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-secondary";

function Index() {
  const orcamento = whatsappHref();
  const externo = orcamento.startsWith("http");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
              maskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="eyebrow">Sites · Landing Pages · Presença digital</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold text-ink sm:text-5xl md:text-6xl">
                Sua empresa merece uma presença digital à altura.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                Criamos sites e landing pages profissionais, personalizados para apresentar sua
                empresa, destacar seus serviços e transformar visitantes em oportunidades.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={orcamento}
                  target={externo ? "_blank" : undefined}
                  rel="noreferrer"
                  className={btnPrimary}
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#servicos" className={btnGhost}>
                  Conhecer nossos serviços
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-20 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
                {[
                  { k: "Projetos sob medida", v: "Personalizado" },
                  { k: "Prazo médio de entrega", v: "3 a 5 dias" },
                  { k: "Desktop, tablet e celular", v: "100% responsivo" },
                ].map((item) => (
                  <div key={item.k} className="bg-surface px-7 py-8">
                    <dt className="font-display text-lg font-semibold text-ink">{item.v}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground">{item.k}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="border-t border-line bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold text-ink md:text-4xl">
                Soluções digitais desenvolvidas com critério.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
              {servicos.map((servico, i) => (
                <Reveal key={servico.titulo} delay={i * 90}>
                  <article className="group h-full bg-surface p-9 transition-colors duration-300 hover:bg-secondary">
                    <servico.icon
                      className="h-6 w-6 text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
                      strokeWidth={1.4}
                    />
                    <h3 className="mt-8 text-xl font-semibold text-ink">{servico.titulo}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{servico.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="border-t border-line py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <p className="eyebrow">Diferenciais</p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink md:text-4xl">
                Por que escolher a LP Soluções Digitais.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
                Trabalhamos com atenção aos detalhes em cada etapa, do primeiro contato à entrega
                final, para que o resultado represente a empresa com seriedade.
              </p>
            </Reveal>

            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {diferenciais.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 60} className="bg-surface">
                  <div className="flex items-start gap-3 px-7 py-6">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span className="text-sm text-ink">{item}</span>
                  </div>
                </Reveal>
              ))}
              <li aria-hidden className="hidden bg-surface sm:block" />
            </ul>

          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-t border-line bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="eyebrow">Como funciona</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold text-ink md:text-4xl">
                Um processo claro, do briefing à publicação.
              </h2>
            </Reveal>

            <ol className="mt-14 border-t border-line">
              {etapas.map((etapa, i) => (
                <Reveal as="li" key={etapa.numero} delay={i * 70}>
                  <div className="group grid items-baseline gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-secondary md:grid-cols-[6rem_16rem_1fr] md:gap-8 md:px-4">
                    <span className="font-display text-sm tracking-[0.2em] text-muted-foreground">
                      {etapa.numero}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{etapa.titulo}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{etapa.texto}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="border-t border-line py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Sobre</p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink md:text-4xl">
                A LP Soluções Digitais
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-6 text-base leading-relaxed text-ink-soft">
                <p>
                  A LP Soluções Digitais nasceu com o propósito de ajudar empresas a apresentarem seu
                  trabalho de maneira mais profissional no ambiente digital.
                </p>
                <p>
                  Cada empresa possui uma história, uma identidade e uma forma diferente de
                  trabalhar. Por isso, nossos projetos são desenvolvidos de maneira personalizada,
                  buscando transformar essas características em uma presença digital clara, moderna e
                  profissional.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="border-t border-line bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="eyebrow">Projetos</p>
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold text-ink md:text-4xl">
                Trabalhos realizados.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
                Espaço reservado para os projetos da LP Soluções Digitais. Cada card será substituído
                pelo trabalho real assim que estiver disponível.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {projetos.map((projeto, i) => (
                <Reveal key={i} delay={i * 90}>
                  <article className="group h-full border border-line bg-background transition-colors duration-300 hover:border-ink/25">
                    <div className="flex aspect-[4/3] items-center justify-center border-b border-line bg-secondary">
                      <span className="font-display text-xs tracking-[0.3em] text-muted-foreground uppercase">
                        Em breve
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-6 py-6">
                      <div>
                        <h3 className="text-base font-semibold text-ink">{projeto.titulo}</h3>
                        <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                          {projeto.tipo}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line bg-primary py-24 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <h2 className="text-3xl leading-tight font-semibold text-primary-foreground md:text-4xl">
                Pronto para apresentar sua empresa de uma forma mais profissional?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/70 md:text-base">
                Conte-nos um pouco sobre sua empresa e vamos entender como podemos criar uma presença
                digital personalizada para o seu negócio.
              </p>
              <a
                href={orcamento}
                target={externo ? "_blank" : undefined}
                rel="noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-sm bg-background px-8 py-4 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-secondary"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-line py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink md:text-4xl">
                Perguntas frequentes
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="border-t border-line">
                {faq.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-line">
                    <AccordionTrigger className="py-6 text-left text-base font-medium text-ink hover:no-underline">
                      {item.pergunta}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-ink-soft">
                      {item.resposta}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="border-t border-line bg-surface py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink md:text-4xl">
                Vamos conversar sobre o seu projeto.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
                Envie uma mensagem com algumas informações sobre a sua empresa. Retornamos com as
                próximas etapas e o orçamento.
              </p>

              <ul className="mt-10 divide-y divide-line border-y border-line">
                <li className="flex items-center gap-4 py-5">
                  <MessageCircle className="h-4 w-4 text-accent" strokeWidth={1.6} />
                  {contato.whatsapp ? (
                    <a
                      href={whatsappHref()}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink hover:text-accent"
                    >
                      WhatsApp
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      WhatsApp — a ser informado
                    </span>
                  )}
                </li>
                <li className="flex items-center gap-4 py-5">
                  <Instagram className="h-4 w-4 text-accent" strokeWidth={1.6} />
                  {contato.instagram ? (
                    <a
                      href={`https://instagram.com/${contato.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink hover:text-accent"
                    >
                      @{contato.instagram}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Instagram — a ser informado
                    </span>
                  )}
                </li>
                <li className="flex items-center gap-4 py-5">
                  <Mail className="h-4 w-4 text-accent" strokeWidth={1.6} />
                  {contato.email ? (
                    <a href={`mailto:${contato.email}`} className="text-sm text-ink hover:text-accent">
                      {contato.email}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">E-mail — a ser informado</span>
                  )}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-line bg-background p-8 md:p-10">
                <ContatoForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
