export const About = () => {
 return (
  <section className=" flex h-screen  flex-col justify-center items-start gap-10 bg-[url('/output.jpg')] bg-cover bg-no-repeat p-10 px-20 ">
   <h2 className="text-6xl">Sobre a Empresa</h2>
   <div className="flex justify-around gap-3 ">
    <div className="flex w-1/2 flex-col gap-3">
     <h3 className="text-3xl">Audaz</h3>
     <p className="text-xl">Somos uma equipe de especialistas em direito tributário, dedicados a auxiliar empresas de todos os portes a otimizar sua carga tributária e garantir a segurança jurídica de seus negócios.</p>
    </div>

    <div className="flex w-1/2 flex-col  gap-3">
     <h3 className="text-3xl">Propósito</h3>
     <p className="text-xl">Entedemos que o sucesso de uma empresa de uma gestão financeira eficiente e estratégica. Nosso objetivo é ajudar você a ter mais controle sobre seus impostos e recursos, para que você possa se concentrar no que realmente importa: <strong>o crescimento do seu negócio.</strong></p>
    </div>

   </div>
  </section>
 )
}

