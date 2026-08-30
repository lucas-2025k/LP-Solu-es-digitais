/**
 * Informações de contato da LP Soluções Digitais.
 *
 * Preencha os campos abaixo quando os dados oficiais estiverem disponíveis.
 * - whatsapp: apenas dígitos, com DDI e DDD. Ex.: "5544999999999"
 * - instagram: usuário sem "@". Ex.: "lpsolucoesdigitais"
 * - email: endereço completo. Ex.: "contato@lpsolucoesdigitais.com.br"
 * Deixe como string vazia ("") o que ainda não existir — o site trata isso
 * automaticamente e nada quebra.
 */
export const contato = {
  whatsapp: "5542998619234",
  instagram: "",
  email: "lp.solucoesdigitais00@gmail.com",
  localizacao: "",
} as const;

export const mensagemPadrao =
  "Olá! Gostaria de solicitar um orçamento para a criação de um site ou landing page.";

export function whatsappHref(mensagem: string = mensagemPadrao) {
  if (!contato.whatsapp) return "#contato";
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function whatsappExterno() {
  return Boolean(contato.whatsapp);
}
