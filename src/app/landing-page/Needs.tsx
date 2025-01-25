import { SquareCheckBig } from 'lucide-react';
import article from '../../../public/article-businesses.png'
import Image from "next/image";
import { Button } from '@/components/ui/button';

export const Needs = () => {
 return (
  <section className="flex-col items-start gap-5 mb-[20rem] ">
   <h2>Será que você está pagando muito imposto?</h2>

   <div className="group grid grid-cols-2 items-center justify-center gap-5  rounded-white p-5 rounded-xl">
    <Image
     src={article}
     alt=""
     className="rounded-lg w-full flex hover:scale-[101%] duration-300 col-span-2"
    />

    <div className="bg-foreground  p-4 gap-2 flex flex-col">
     <h3 className="text-2xl text-secondary">Planejamento Tributário</h3>
     <p>Muitas empresas pagam mais impostos do que deveria devido à falta de um planejamento tributário eficiente. Isso pode afetar diretamente o crescimento e a rentabilidade do seu negócio.</p>
    </div>

    <div className="bg-foreground  p-4 gap-2 flex flex-col">
     <h3 className="text-2xl text-secondary">Legislação Complexa</h3>
     <p>O sistema tributário brasileiro é cheio de nuances e diferentes opções fiscais. Sem o devido conhecimento, os empresários acabam ignorando alternativas que poderiam reduzir sua carga tributária.</p>
    </div>
   </div>

   <h2>Como descobrir se estou pagando mais?</h2>
   <p>Existem estratégias legais para reduzir impostos, recuperar valores pagos a mais e evitar muitas fiscais. O planejamento tributário é essencial para colocar sua empresa no caminho do crescimento caminho sustentável.</p>

   <h2>Temos a solução</h2>

   <div className='flex gap-4 justify-between'>
    <div className=' flex flex-col gap-4'>
     <h3 className='text-4xl mb-5'>Otimize sua tributação e impulsione seu crescimento:</h3>
     <div className="bg-foreground  p-4 gap-2 flex flex-col">
      <h4 className=" text-secondary text-3xl font-bold ">Consultoria Tributária</h4>
      <div className=''>
       <ul>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Análise detalhada da carga tributária da empresa.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Planejamento tributário para redução de impostos dentro da lei.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Orientação sobre benefícios fiscais aplicáveis ao negócio.</li>
       </ul>
       <div className='w-full flex justify-end' >
        <Button variant="outline" className='border-primary text-primary text-lg p-5' >Mais Detalhes</Button>
       </div>
      </div>
     </div>


     <div className="bg-foreground  p-4 gap-2 flex flex-col">
      <h4 className=" text-secondary text-3xl font-bold ">Revisão Fiscal e Recuperação de Tributos </h4>
      <div className=''>
       <ul>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Identificação de créditos tributários não aproveitados.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Revisão de tributos pagos a maior ou indevidamente.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Pedido de restituição ou compensação de valores.</li>
       </ul>
      </div>
       <div className='w-full flex justify-end' >
        <Button variant="outline" className='border-primary text-primary text-lg p-5' >Mais Detalhes</Button>
       </div>
     </div>

     <div className="bg-foreground  p-4 gap-2 flex flex-col">
      <h4 className=" text-secondary text-3xl font-bold ">Revisão Fiscal e Recuperação de Tributos </h4>
      <div className=''>
       <ul>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Identificação de créditos tributários não aproveitados.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Revisão de tributos pagos a maior ou indevidamente.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Pedido de restituição ou compensação de valores.</li>
       </ul>
      </div>
       <div className='w-full flex justify-end' >
        <Button variant="outline" className='border-primary text-primary text-lg p-5' >Mais Detalhes</Button>
       </div>
     </div>

     <div className="bg-foreground  p-4 gap-2 flex flex-col">
      <h4 className=" text-secondary text-3xl font-bold ">Revisão Fiscal e Recuperação de Tributos </h4>
      <div className=''>
       <ul>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Identificação de créditos tributários não aproveitados.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Revisão de tributos pagos a maior ou indevidamente.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Pedido de restituição ou compensação de valores.</li>
       </ul>
      </div>
       <div className='w-full flex justify-end' >
        <Button variant="outline" className='border-primary text-primary text-lg p-5' >Mais Detalhes</Button>
       </div>
     </div>

     <div className="bg-foreground  p-4 gap-2 flex flex-col">
      <h4 className=" text-secondary text-3xl font-bold ">Revisão Fiscal e Recuperação de Tributos </h4>
      <div className=''>
       <ul>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Identificação de créditos tributários não aproveitados.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Revisão de tributos pagos a maior ou indevidamente.</li>
        <li className='flex items-center gap-2'><SquareCheckBig className='text-primary' /> Pedido de restituição ou compensação de valores.</li>
       </ul>
      </div>
       <div className='w-full flex justify-end' >
        <Button variant="outline" className='border-primary text-primary text-lg p-5' >Mais Detalhes</Button>
       </div>
     </div>

    </div>

    <img
     src="https://images.pexels.com/photos/4427908/pexels-photo-4427908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt="Homens negociando"
     className=' w-1/4  bg-cover rounded-lg'
    />

   </div>


  </section>
 )
}

