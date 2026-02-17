import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Dr. Ruan Krubniki Ferraz",
    description: "Política de privacidade e uso de dados do site Dr. Ruan Krubniki Ferraz.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-surface-cream py-12 md:py-24">
            <div className="max-w-3xl mx-auto px-6">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-gold transition-colors mb-8 text-sm uppercase tracking-widest font-bold">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para o site
                    </Link>
                    <h1 className="font-serif text-3xl md:text-5xl text-primary mb-2">Política de Privacidade</h1>
                    <p className="text-sm text-primary/40 uppercase tracking-widest">Última atualização: Fevereiro de 2026</p>
                </div>

                <div className="prose prose-slate prose-headings:font-serif prose-headings:text-primary prose-a:text-gold hover:prose-a:text-gold-dark max-w-none text-slate-600 leading-relaxed text-justify">
                    <p>
                        A sua privacidade é importante para nós. É política do <strong>Dr. Ruan Krubniki Ferraz</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://drruankrubniki.vercel.app">drruankrubniki.vercel.app</a>.
                    </p>

                    <h3>1. Coleta de Dados</h3>
                    <p>
                        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como agendamento de consultas). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                    </p>
                    <p>
                        Os dados que comumente coletamos podem incluir:
                    </p>
                    <ul>
                        <li>Nome completo;</li>
                        <li>Telefone/WhatsApp para contato;</li>
                        <li>E-mail;</li>
                        <li>Informações básicas sobre o motivo do contato (para triagem).</li>
                    </ul>

                    <h3>2. Uso de Dados</h3>
                    <p>
                        Nós retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                    </p>

                    <h3>3. Cookies e Tecnologias de Rastreamento</h3>
                    <p>
                        Este site pode utilizar cookies e/ou web beacons quando um usuário tem acesso às páginas. Os cookies que podem ser utilizados associam-se (se for o caso) unicamente com o navegador de um determinado computador.
                    </p>
                    <p>
                        Os cookies que são utilizados neste site podem ser instalados pelo mesmo, os quais são originados dos distintos servidores operados por este, ou a partir dos servidores de terceiros que prestam serviços e instalam cookies e/ou web beacons (por exemplo, análise de tráfego com Google Analytics ou Pixel do Meta).
                    </p>
                    <p>
                        O usuário tem a possibilidade de configurar seu navegador para ser avisado, na tela do computador, sobre a recepção dos cookies e para impedir a sua instalação no disco rígido. As informações pertinentes a esta configuração estão disponíveis em instruções e manuais do próprio navegador.
                    </p>

                    <h3>4. Links Externos</h3>
                    <p>
                        Nosso site pode ter links para sites externos que não são operados por nós (como Instagram, WhatsApp ou Google Maps). Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                    </p>

                    <h3>5. Seus Direitos (LGPD)</h3>
                    <p>
                        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. Seus direitos como titular dos dados (previstos na LGPD) incluem acesso, correção, eliminação, portabilidade e revogação do consentimento.
                    </p>

                    <h3>6. Compromisso do Usuário</h3>
                    <p>
                        O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site oferece e com caráter enunciativo, mas não limitativo:
                    </p>
                    <ul>
                        <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                        <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou apostas online, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                        <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do site, de seus fornecedores ou terceiros.</li>
                    </ul>

                    <h3>7. Contato</h3>
                    <p>
                        Para esclarecimentos sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, entre em contato através do e-mail: <strong>contato@drruankrubniki.com.br</strong> ou pelo telefone da clínica.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-primary/10">
                    <p className="text-xs text-center text-slate-400">
                        Esta política é efetiva a partir de <strong>Fevereiro/2026</strong>.
                    </p>
                </div>
            </div>
        </main>
    );
}
