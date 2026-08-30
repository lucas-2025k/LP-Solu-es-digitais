import { useState, type FormEvent } from "react";

import { contato, whatsappHref } from "@/config/contato";

export function ContatoForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const contatoInformado = String(data.get("contato") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    const texto = [
      `Olá! Meu nome é ${nome}.`,
      empresa ? `Empresa: ${empresa}.` : "",
      contatoInformado ? `Contato: ${contatoInformado}.` : "",
      mensagem,
    ]
      .filter(Boolean)
      .join(" ");

    if (contato.whatsapp) {
      window.open(whatsappHref(texto), "_blank", "noopener");
      form.reset();
      return;
    }

    if (contato.email) {
      window.location.href = `mailto:${contato.email}?subject=${encodeURIComponent(
        "Solicitação de orçamento",
      )}&body=${encodeURIComponent(texto)}`;
      form.reset();
      return;
    }

    setEnviado(true);
  }

  const field =
    "w-full rounded-sm border border-input bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="eyebrow">
            Nome
          </label>
          <input id="nome" name="nome" required placeholder="Seu nome" className={`mt-2 ${field}`} />
        </div>
        <div>
          <label htmlFor="empresa" className="eyebrow">
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            placeholder="Nome da empresa"
            className={`mt-2 ${field}`}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contato" className="eyebrow">
          E-mail ou telefone
        </label>
        <input
          id="contato"
          name="contato"
          required
          placeholder="Como podemos responder"
          className={`mt-2 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="eyebrow">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          required
          placeholder="Conte um pouco sobre sua empresa e o que você precisa."
          className={`mt-2 resize-none ${field}`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-primary px-6 py-4 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-accent"
      >
        Enviar mensagem
      </button>

      {enviado && (
        <p className="text-xs leading-relaxed text-muted-foreground">
          Os canais de contato ainda estão sendo configurados. Assim que o WhatsApp ou o e-mail
          oficial forem definidos, este formulário passará a encaminhar as mensagens
          automaticamente.
        </p>
      )}
    </form>
  );
}
