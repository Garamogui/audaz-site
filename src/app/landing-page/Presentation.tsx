import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined, HandCoins, UserRound } from "lucide-react";
import Link from "next/link";

export const Presentation = () => {
 return (
  <main className="flex flex-col justify-between p-10 px-40 pt-10  bg-secondary-foreground  bg-[url('/bg-hero-section.jpg')] bg-cover  ">
   <div className="flex h-screen flex-col items-start justify-center gap-10">
    <h2 className="text-3xl text-white ">Mais de 25 anos impulsionando o crescimento das empresas</h2>
    <h1 className="text-7xl  pb-1 "> Soluções  Fiscais Personalizadas para o seu Negócio.</h1>
    <p className="text-xl text-foreground">Preserve o que é seu: menos importo, mais dinheiro no caixa.</p>
    <div className="flex gap-2 ">

     <Link href="/about"><Button  className="p-6 text-lg text-background ">Saiba Mais</Button></Link>
     <a
      href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
      className=""
     >
      <Button  className="p-6 text-lg text-background ">Agende uma Consulta</Button></a>
    </div>
    <div className="flex justify-between w-full">
     <div className=" flex flex-col items-center justify-center">
      <UserRound className=" size-10 text-white" />
      <p> Garanta segurança jurídica </p>
     </div>
     <div className=" flex flex-col items-center justify-center">
      <HandCoins className=" size-10 text-white" />
      <p>Reduza Impostos Legalmente</p>
     </div>
     <div className=" flex flex-col items-center justify-center">
      <ChartNoAxesCombined className=" size-10 text-white" />
      <p>Aumente Sua Margem de Lucro</p>
     </div>
    </div>
   </div>
  </main>

 )
}

