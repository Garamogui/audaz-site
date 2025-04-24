export const MVV = () => {
  return (
  <section className="">
   <div className="w-full flex flex-col justify-center items-center bg-background-alt p-20 gap-10">
    <h2 className=" w-full">
     Missão, Visão e Valores
    </h2>
    <div className="flex items-start justify-center gap-3 ">

     <div className="flex gap-5 w-1/3">
      <h3 className="bg-background px-2 text-3xl text-foreground rounded-sm size-10 justify-center text-center items-center">1</h3>
      <div className="flex flex-col gap-2  ">
       <h4 className="-mt-2 text-foreground text-4xl" > Missão </h4>
       <p>Prover soluções fiscais personalizadas para o seu negócio.</p>
      </div>
     </div>

     <div className="flex gap-5 w-1/3">
      <h3 className="bg-background px-2 text-3xl text-foreground rounded-sm size-10 justify-center text-center items-center">2</h3>
      <div className="flex flex-col gap-2  ">
       <h4 className="-mt-2 text-foreground text-4xl" > Visão </h4>
       <p>Ser referência nacional em expertise e excelência na área de direito tributário, reconhecida pela qualidade de nossos serviços e pelo compromisso com nossos clientes.</p>
      </div>
     </div>

     <div className="flex gap-5 w-1/3">
      <h3 className="bg-background px-2 text-3xl text-foreground rounded-sm size-10 justify-center text-center items-center">3</h3>
      <div className="flex flex-col gap-2  ">
       <h4 className="-mt-2 text-foreground text-4xl" > Valores </h4>
       <p>Ética, profissionalismo, transparência, comprometimento, inovação e excelência.</p>
      </div>
     </div>

    </div>
   </div>
  </section>
  )
}

