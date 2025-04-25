import { ServiceCard } from "./ServiceCard";

export const Services = () => {
 return (
  <section className="px-20 py-20 h-full flex flex-col gap-20 bg-background-alt ">
   <h2>Nossos Serviços: Consultoria Tributária</h2>
   <div className="flex gap-4 justify-center ">
    <div className="flex flex-col  items-center w-full ">
     <h3 className="text-4xl mb-20 w-full text-left"></h3>


     <ServiceCard
      title="Revisão Fiscal e Recuperação de Tributos"
      items={[
       'Identificação de créditos tributários não aproveitados.',
       'Revisão de tributos pagos a maior ou indevidamente.',
       'Pedido de restituição ou compensação de valores.',
      ]}
      url="/revisao-fiscal"
      index={1}
     />

     <ServiceCard
      title="Defesa em Processos Tributários"
      items={[
       'Representação em processos administrativos fiscais.',
       'Defesa em ações judiciais contra cobranças indevidas.',
       'Negociação e contestação de autuações fiscais.',
      ]}
      url="/defesa"
      index={2}
     />

     <ServiceCard
      title="Regularização Fiscal"
      items={[
       'Parcelamento de débitos tributários.',
       'Inscrição e regularização de CNPJs e cadastros fiscais.',
       'Solução de pendências no SPED e outros sistemas fiscais',
      ]}
      url="/regularizacao"
      index={3}
     />

     <ServiceCard
      title="BPO Fiscal"
      items={[
       'Planejamento tributário.',
       'Cálculo de tributos.',
       'Consultoria e compliance fiscal.',
      ]}
      url="/bpo-fiscal"
      index={4}
     />
    </div>
   </div>

   <h2>Metodologia</h2>

   <ol className="flex flex-col items-start gap-2 w-full text-xl px-40  ">
    <li>
     <strong>Diagnóstico Fiscal:</strong> Coletamos e analisamos dados da sua empresa para identificar riscos e oportunidades de economia tributária.
    </li>

    <li>
     <strong>Planejamento Estratégico:</strong> Criamos um plano fiscal personalizado, alinhado com as necessidades e objetivos do seu negócio.
    </li>

    <li>
     <strong>Implementação de Soluções:</strong> Aplicamos as estratégias definidas, otimizando processos e garantindo conformidade fiscal.
    </li>

    <li>
     <strong>Monitoramento e Ajustes:</strong> Acompanhamos continuamente sua situação tributária, ajustando as estratégias conforme necessário para manter sua empresa sempre competitiva.
    </li>
   </ol>

  </section>
 );
};
