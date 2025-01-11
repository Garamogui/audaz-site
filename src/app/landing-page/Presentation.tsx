import { Button } from "@/components/ui/button";

export const Presentation = () => {
 return (
  <main className="flex justify-between p-10 px-20">
   <div className="flex h-screen w-[60vw] flex-col items-start justify-center gap-10">
    <h1 className="text-7xl">Soluções  Fiscais Personalizadas para o seu Negócio.</h1>
    <p className="text-xl">Ajudamos empresas de todos os portes a navegar pelo complexo mundo tribuário brasileiro com soluções personalizadas e eficazes.</p>
    <div className="flex gap-2 ">
     <Button variant="golden" className="p-6 text-lg">Saiba Mais</Button>
     <Button variant="golden" className="p-6 text-lg">Agenda uma Consulta</Button>
    </div>
   </div>
   <div className="flex w-1/4 items-center justify-center " >
    <img
     src="https://thumbs.dreamstime.com/z/serious-business-woman-sitting-looking-desk-office-119493251.jpg"
     alt="Mulher de negócios no escritório"
     className="" />
   </div>
  </main>

 )
}

