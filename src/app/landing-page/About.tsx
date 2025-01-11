export const About = () => {
 return (
  <section className=" flex h-screen  flex-col justify-center items-start gap-10 bg-[url('/output.jpg')] bg-cover bg-no-repeat p-10 px-20 ">
   <h2 className="text-6xl">Sobre a Empresa</h2>
   <div className="flex justify-around gap-3 ">
    <div className="flex w-1/2 flex-col gap-3">
     <h3 className="text-3xl">Missão</h3>
     <p className="text-xl"> Nossa missão é simplificar a gestão fiscal de nossos clientes, oferecendo soluções personalizadas e transparentes que garantem a conformidade legal e a otimização de recursos.</p>
    </div>

    <div className="flex w-1/2 flex-col  gap-3">
     <h3 className="text-3xl">Visão</h3>
     <p className="text-xl"> Aspiramos a ser reconhecidos como a referência em serviços fiscais, construindo relações de longo prazo com nossos clientes, baseadas em confiança, expertise e resultados.</p>
    </div>

   </div>
  </section>
 )
}

