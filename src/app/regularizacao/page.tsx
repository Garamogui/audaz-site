import { Header } from "../landing-page/Header";

export default function page() {
  return (
    <>
      <Header />
      <article>
        <section className="flex flex-col text-white py-32 w-full h-full text-left gap-4">
          <h1 className="w-full text-left">Regularização Fiscal</h1>
          <h2 className="w-full text-left">Introdução</h2>

          <p>
            Regularização fiscal refere-se ao conjunto de procedimentos que uma empresa ou pessoa física deve seguir para corrigir quaisquer pendências ou inconsistências com as obrigações tributárias junto à Receita Federal ou outros órgãos competentes. Esse processo pode envolver a declaração de tributos que não foram informados corretamente, o pagamento de impostos atrasados, a correção de declarações anteriores, e a negociação de dívidas tributárias, incluindo multas e juros. A regularização é crucial para evitar sanções legais, como multas pesadas, restrições no funcionamento do negócio, e até mesmo processos judiciais.
          </p>

          <p>
            Além de resolver pendências, a regularização fiscal também é uma oportunidade para as empresas revisarem e otimizarem seu planejamento tributário. Com a ajuda de consultores especializados, é possível identificar maneiras legais de reduzir a carga tributária, aproveitando incentivos fiscais e reestruturando operações de maneira mais eficiente do ponto de vista fiscal.
          </p>

          <h2>Principais Aspectos da Regularização Fiscal</h2>
          <ul className="list-disc">
            <li>Corrigir quaisquer pendências ou inconsistências com as obrigações tributárias junto à Receita Federal ou outros órgãos competentes.</li>
            <li>Corrigir de declarações fiscais anteriores que podem conter erros.</li>
            <li>Declarar tributos que não foram informados corretamente anteriormente.</li>
            <li>Negociação com autoridades fiscais para estabelecer acordos de pagamento ou parcelamento de dívidas tributárias.</li>
          </ul>

          <h2>Serviços Oferecidos em Regularização Fiscal</h2>
          <ol className="list-decimal">
            <li><strong>Diagnóstico Fiscal Completo:</strong> Realizamos uma análise aprofundada da situação fiscal da empresa para identificar quaisquer pendências ou erros que possam existir nas declarações fiscais anteriores.</li>
            <li><strong>Correção de Declarações:</strong> Auxiliamos na retificação de declarações fiscais para corrigir erros e garantir que todas as informações estejam precisas e atualizadas.</li>
            <li><strong>Negociação de Dívidas Fiscais:</strong> Trabalhamos com as autoridades fiscais para negociar débitos, parcelamentos ou reduções de multas e juros, sempre buscando as condições mais favoráveis para a empresa.</li>
            <li><strong>Adesão a Programas de Anistia ou Incentivos Fiscais:</strong> Orientamos e assistimos na adesão a programas governamentais que oferecem anistia ou incentivos para a regularização de débitos fiscais.</li>
            <li><strong>Implementação de Processos de Compliance Fiscal:</strong> Desenvolvemos e implementamos procedimentos e práticas para garantir a conformidade contínua com as normas fiscais, reduzindo o risco de futuras contingências fiscais.</li>
            <li><strong>Consultoria Contínua:</strong> Oferecemos suporte e consultoria contínua para garantir que a empresa permaneça em conformidade com as mudanças nas leis fiscais.</li>
          </ol>

          <a
            href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
            className="bg-goldenGradient text-black font-bold p-3 rounded hover:scale-105 duration-300"
          >
            Fale Conosco
          </a>

        </section>
      </article>
    </>
  );
}
