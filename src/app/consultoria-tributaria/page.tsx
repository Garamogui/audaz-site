import { GetInTouch } from "@/components/ui/getInTouch";
import { Header } from "../landing-page/Header";

export default function page() {
  return (
    <>
      <Header />
      <article>
        <section className="flex flex-col text-white py-32 w-full h-full text-left gap-4">
          <h1 className="w-full text-left">Consultoria Tributária</h1>
          <h2 className="w-full text-left">Introdução</h2>

          <p>
            A Consultoria Tributária é um serviço especializado que ajuda empresas a gerenciar suas obrigações fiscais de maneira eficiente e conforme a legislação. Consultores tributários oferecem orientação sobre uma vasta gama de questões fiscais, incluindo como estruturar operações de negócios, planejar transações, e compreender as implicações tributárias de decisões empresariais. Este tipo de consultoria é crucial para garantir que as entidades cumpram com suas responsabilidades fiscais e aproveitem oportunidades legais para minimizar a carga tributária. O papel dos consultores é interpretar complexidades da legislação, se adaptar a mudanças regulatórias e aplicar práticas tributárias que alinhem as operações dos clientes com as exigências legais mais atuais.
          </p>

          <p>
            Além de oferecer orientação regulatória, a consultoria tributária também envolve a análise estratégica do impacto fiscal das atividades empresariais com o intuito de ajudar na tomada de decisões mais informadas e economicamente vantajosas. Esses profissionais trabalham em conjunto com contadores, advogados e outros consultores para integrar soluções tributárias no planejamento geral de negócios, projetos de investimento e reestruturações corporativas. O resultado é uma gestão fiscal proativa, que não só evita problemas legais e multas, mas também identifica oportunidades de economia tributária e aumenta a lucratividade geral da empresa.
          </p>

          <h2>Principais Aspectos da Consultoria Tributária</h2>
          <ul className="list-disc">
            <li>Identificar riscos fiscais e propor ações para mitigá-los.</li>
            <li>Planejar estratégias tributárias que alinhem a carga tributária com os objetivos de negócios da empresa.</li>
            <li>Assegurar que todas as declarações e pagamentos de impostos estejam corretos e sejam feitos em tempo hábil, evitando multas e juros.</li>
            <li>Aproveitar incentivos fiscais e benefícios oferecidos pela legislação, que muitas vezes são desconhecidos pelos gestores.</li>
          </ul>

          <h2>Nossos Serviços em Consultoria Tributária</h2>
          <ol className="list-decimal">
            <li><strong>Diagnóstico Fiscal:</strong> Análise da situação fiscal atual da empresa para identificar potenciais contingências e oportunidades de economia.</li>
            <li><strong>Planejamento Tributário:</strong> Desenvolvimento de estratégias para redução legal da carga tributária, através da reestruturação operacional ou financeira, e adequação às normas vigentes.</li>
            <li><strong>Compliance Tributário:</strong> Assistência no cumprimento de todas as obrigações fiscais, incluindo preparação e revisão de declarações fiscais e atendimento a eventuais fiscalizações.</li>
            <li><strong>Acompanhamento de Processos Administrativos e Judiciais:</strong> Monitoramento e suporte em processos relacionados aos tributos da empresa, incluindo emissão de pareceres quando necessário.</li>
            <li><strong>Transação Individual dos Débitos Frente à PGFN:</strong> Assistência na negociação de débitos tributários com a Procuradoria-Geral da Fazenda Nacional.</li>
            <li><strong>Monitoramento de Teses Tributárias:</strong> Análise contínua de teses tributárias aplicáveis que podem beneficiar a empresa.</li>
            <li><strong>Apoio na Tomada de Decisão:</strong> Consultoria estratégica para a administração da empresa em situações que evidenciem risco de passivo tributário.</li>
            <li><strong>Apoio em Auditorias e Consultorias Externas:</strong> Assistência durante auditorias e consultorias, garantindo a conformidade e a representação adequada da empresa.</li>
          </ol>

     <GetInTouch />
        </section>
      </article>
    </>
  );
}
