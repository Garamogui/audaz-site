import { Button } from "@/components/ui/button";

export const Presentation = () => {
 return (
  <main className="flex justify-between p-10 px-20">
   <div className="flex h-screen w-[60vw] flex-col items-start justify-center gap-10">
    <h1 className="text-7xl">Soluções  Fiscais Personalizadas para o seu Negócio.</h1>
    <p className="text-xl">Ajudamos empresas de todos os portes a navegar pelo complexo mundo tribuário brasileiro com soluções personalizadas e eficazes.</p>
    <div className="flex gap-2 ">
     <Button variant="golden" className="p-6 text-lg">Saiba Mais</Button>
    <a
     href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
     className="bg-goldenGradient text-black font-bold p-2 rounded hover:brightness-110 duration-300"
    > Marcar Consulta</a>
    </div>
   </div>
   <div className="flex items-center justify-center " >
    <img
     src="https://images.pexels.com/photos/1400249/pexels-photo-1400249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt="Mulher de negócios no escritório"
     className="rounded-lg" />
   </div>
  </main>

 )
}

