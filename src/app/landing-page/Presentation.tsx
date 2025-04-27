import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined, HandCoins, UserRound } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export const Presentation = () => {
 return (
  <main className="relative flex flex-col justify-between bg-background-alt bg-cover h-screen">
   {/* container absoluto com dimensões herdadas de h-screen */}
   <div className="  z-10 flex items-center justify-center ">
    <Image
     src="/hero-section-image.jpg"
     alt="Imagem de fundo"
     fill
     className="object-cover"
     priority
    />
   </div>

   {/* conteúdo sobreposto */}
   <div className="flex bg-background-alt/90 h-full p-10 px-40 z-10 flex-col items-start justify-center gap-10">
    <h2 className="text-3xl text-foreground">
     Mais de 25 anos impulsionando o crescimento das empresas
    </h2>
    <h1 className="text-7xl pb-1 text-primary">
     Soluções Fiscais Personalizadas para o seu Negócio.
    </h1>
    <p className="text-xl text-foreground">
     Preserve o que é seu: menos imposto, mais dinheiro no caixa.
    </p>
    <div className="flex gap-2">
     <Link href="#Por-que">
      <Button className="p-6 text-lg text-background">Saiba Mais</Button>
     </Link>
     <a
      href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
     >
      <Button className="p-6 text-lg text-background">
       Agende uma Consulta
      </Button>
     </a>
    </div>
    <div className="flex justify-between w-full">
     <div className="flex flex-col items-center justify-center">
      <UserRound className="size-10 text-foreground" />
      <p>Garanta segurança jurídica</p>
     </div>
     <div className="flex flex-col items-center justify-center">
      <HandCoins className="size-10 text-foreground" />
      <p>Reduza Impostos Legalmente</p>
     </div>
     <div className="flex flex-col items-center justify-center">
      <ChartNoAxesCombined className="size-10 text-foreground" />
      <p>Aumente Sua Margem de Lucro</p>
     </div>
    </div>
   </div>
  </main>
 );
};
