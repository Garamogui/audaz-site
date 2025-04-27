import aboutUs from "../../../public/sobre-nos.webp"
import Image from "next/image";

export const About = () => {
 return (
  <section id="about" className=" flex h-screen p-20 px-40 justify-center items-center gap-10  bg-background bg-cover bg-no-repeat   ">
   <div className="flex flex-col">
    <h2 className="text-6xl  ">Sobre Nós</h2>
    <div className="flex justify-center gap-3 ">
     <div className="flex flex-col justify-around gap-3 ">
      <div className="flex w-2/3 flex-col gap-3">
       <h3 className="text-3xl">Audaz</h3>
       <p className="text-xl">
        Fundada nos anos 90, a Audaz é composta por uma equipe de especialistas em direito tributário, dedicada a auxiliar empresas de todos os portes a otimizar sua carga tributária e garantir a segurança jurídica de seus negócios.
        <br />
        Com décadas de experiência, oferecemos não apenas economia de impostos, mas também soluções eficazes para empresas que enfrentam débitos tributários.
       </p>
      </div>

      <div className="flex w-2/3 flex-col  gap-3">
       <h3 className="text-3xl">Propósito</h3>
       <p className="text-xl">
        Entendemos que o sucesso de uma empresa depende de uma gestão financeira eficiente e estratégica.
        <br />
        Nosso objetivo é ajudar você a ter mais controle sobre seus impostos e recursos, para que você possa se concentrar no que realmente importa: o crescimento do seu negócio.
       </p>
      </div>

     </div>
    </div>

   </div>

   <div className="flex inset-0 w-2/3 relative h-full  ">
    <Image
     src={aboutUs}
     alt=""
     fill
     className=" object-center rounded-lg   "
    />
   </div>
  </section>
 )
}

