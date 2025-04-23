import { Header } from "../landing-page/Header";

export default function page() {
  return (
    <>
      <Header />
      <article>
        <section className="flex flex-col text-white py-32 w-full h-full text-left gap-4">
          <h1 className="w-full text-left">Revisão Fiscal e Recuperação de Tributos</h1>
          <h2 className="w-full text-left">Introdução</h2>

          <p>
            A Revisão Fiscal é um processo meticuloso pelo qual uma empresa examina suas declarações e pagamentos de tributos anteriores para identificar possíveis erros ou oportunidades de otimização fiscal não aproveitadas. Este serviço é fundamental para garantir a conformidade com a legislação tributária e para evitar possíveis penalidades por erros inadvertidos. O objetivo é assegurar que a empresa não esteja pagando mais do que o devido e esteja em plena conformidade com as normas fiscais.
          </p>

          <p>
            Já a Recuperação de Tributos, muitas vezes resultante de uma revisão fiscal bem executada, envolve o processo de identificar e reaver tributos que foram pagos a mais ou indevidamente ao fisco. Este processo pode ser aplicado a diversos tipos de impostos, como ICMS, IPI, PIS e COFINS, entre outros. A recuperação de tributos é um direito das empresas e pode representar um relevante retorno financeiro, que pode ser realocado em outras áreas da operação. Para efetuar a recuperação, é necessário submeter documentação comprobatória às autoridades fiscais, processo que demanda não só um conhecimento aprofundado da legislação tributária, mas também uma gestão documental rigorosa.
          </p>

          <h2>Principais Aspectos da Revisão Fiscal e Recuperação de Tributos</h2>
          <ul className="list-disc">
            <li>Assegurar a conformidade e Prevenção de Penalidades</li>
            <li>Identificar pagamentos excessivos ou indevidos de tributos para que a empresa recupere esses valores. Isso otimiza os recursos financeiros ao reduzir custos desnecessários com impostos.</li>
          </ul>

          <h2>Nossos serviços de Revisão Fiscal</h2>
          <ol className="list-decimal">
            <li><strong>Auditoria das Declarações Fiscais:</strong> Verificação completa das declarações fiscais passadas para identificar possíveis inconsistências ou erros que podem resultar em multas ou penalidades.</li>
            <li><strong>Verificação da Aplicação Correta da Legislação:</strong> Análise para garantir que todas as leis e regulamentos tributários foram interpretados e aplicados corretamente na apuração dos impostos.</li>
            <li><strong>Identificação de Oportunidades de Economia Fiscal:</strong> Busca proativa por créditos fiscais e incentivos fiscais subutilizados ou desconhecidos que podem ser aplicados retroativamente.</li>
          </ol>

          <h2>Nossos serviços de Recuperação de Tributos</h2>
          <ol className="list-decimal">
            <li><strong>Análise de Créditos Tributários:</strong> Avaliação e identificação de créditos tributários devidos à empresa por pagamentos excessivos ou duplicados.</li>
            <li><strong>Processamento de Reclamações de Reembolso:</strong> Preparação e submissão de documentação necessária para reivindicar reembolsos ou ajustes fiscais.</li>
            <li><strong>Consultoria em Legislação Tributária Recente:</strong> Orientação sobre como novas leis tributárias podem afetar os pagamentos de impostos e como aproveitar as alterações para benefício fiscal futuro.</li>
          </ol>

          <a
            href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
            className="bg-goldenGradient text-black font-bold p-3 rounded hover:scale-105 duration-300"
          >
            Marcar Consulta
          </a>

        </section>
      </article>
    </>
  );
}
