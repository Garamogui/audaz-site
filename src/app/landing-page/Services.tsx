export const Services = () => {
  return (
   <section className="px-20 gap-20 bg-secondary-foreground">
    <div className="flex flex-col gap-10">
     <h2>Nossos Serviços</h2>
     <div className="grid grid-cols-2 gap-6">
      <div className="bg-foreground h-60 p-4 gap-2 flex flex-col">
       <h3 className="text-2xl text-secondary">Planejamento Tributário</h3>
       <p>Desenvolvemos estratégias personalizadas para otimizar a carga tributária de seus negócios, minimizando riscos e maximizando seus resultados.</p>
      </div>
      <div className="bg-foreground h-60 p-4 gap-2 flex flex-col">
       <h3 className="text-2xl text-secondary">Escrituração Fiscal</h3>
       <p>Oferecemos serviços copmletos de escrituração fiscal, garantindo a conformidade om as normas fiscais e a geração de relatórios precisos para tomada de decisões.</p>
      </div>
      <div className="bg-foreground h-36 p-4 gap-2 col-span-2 flex flex-col">
       <h3 className="text-2xl text-secondary">Consultoria Tributária</h3>
       <p>Fornecemos assessoria especializada em diversas áreas do Direito Tributário, auxiliando na resolução de dúvidas, na análise de legislação e na gestão de seus tributos.</p>
      </div>
     </div>
    </div>
    <img src="https://images.pexels.com/photos/6120177/pexels-photo-6120177.jpeg" alt="" className="h-[80vh]" />
   </section>
  )
}


