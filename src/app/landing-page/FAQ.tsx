import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
 return (
  <section className='flex-col bg-[url("https://images.pexels.com/photos/7272207/pexels-photo-7272207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] '>
   <h2>Perguntas Frequentes</h2>
   <Accordion
    type="single"
    collapsible
    className="w-3/4 text-lg p-10 bg-secondary/10 rounded-lg "
   >
    <AccordionItem value="item-1">
     <AccordionTrigger className="text-xl">Quais são os principais serviços que vocês oferecem?</AccordionTrigger>
     <AccordionContent className="text-secondary">Oferecemos uma gama completa de serviços fiscais, desde planejamento tributário e escrituração fiscal até consultoria especializada em diversos ramos do Direito Tributário.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
     <AccordionTrigger className="text-xl">Como a corretora tributária pode me ajudar a reduzir meus impostos?</AccordionTrigger>
     <AccordionContent className="text-secondary">
      Através de um planejamento tributário detalhado, identificamos as melhores opções de regimes fiscais, benefícios e incentivos fiscais disponíveis, além de realizar a revisão das suas obrigações tributárias para evitar o pagamento de tributos indevidos.
     </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3 text-lg">
     <AccordionTrigger className="text-xl"> Quais impostos a corretora tributária pode ajudar a administrar? </AccordionTrigger>
     <AccordionContent className="text-secondary">
      Podemos ajudar com todos os impostos, incluindo:
     <ul className="text-sm">
      <li>Impostos federais: IR, IPI, PIS, Cofins, ITR, etc.</li>
      <li>Impostos estaduais: ICMS, IPVA, etc.</li>
      <li>Impostos municipais: ISS, IPTU, etc. Além de contribuições sociais e encargos trabalhistas.</li>
     </ul>
     </AccordionContent>
    </AccordionItem>
   </Accordion>
  </section>
 )
}

