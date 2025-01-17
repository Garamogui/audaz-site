import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Presentation = () => {
 return (
  <main className="flex justify-between p-10 px-20 pt-10 mb-[20rem] bg-secondary-foreground ">
   <div className="flex h-screen w-[60vw] flex-col items-start justify-center gap-10">
    <h1 className="text-7xl"> <strong className="text-8xl">Audaz</strong> <br /> Soluções  Fiscais Personalizadas para o seu Negócio.</h1>
    <p className="text-xl">Ajudamos empresas de todos os portes a navegar pelo complexo mundo tribuário brasileiro com soluções personalizadas e eficazes.</p>
    <div className="flex gap-2 ">
     <Link href="/about"><Button variant="golden" className="p-6 text-lg">Saiba Mais</Button></Link>
    <a
     href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
     className=""
    ><Button variant="golden" className="p-6 text-lg">Agende uma Consulta</Button></a>
    </div>
   </div>
   <div className="flex items-center w-1/3  justify-center " >
    <img
     src="https://images.pexels.com/photos/2529179/pexels-photo-2529179.jpeg"
     alt="foto de prédios tirada de baixo para cima"
     className="h-[90%] object-cover  rounded-xl" />
   </div>
  </main>

 )
}

