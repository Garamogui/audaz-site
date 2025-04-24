"use client"

import { motion, animate } from "motion/react";
import { Button } from "@/components/ui/button";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"


import { useEffect, useRef, useState } from "react"

type valueKind = 'real' | 'presumido';
//type segment = "supermercado" | "indústria" | "atacadista" | "varejista" | "concessionária" | "servicos" | "transportadora";


export const Calculator = () => {

 const [valueKind, setValueKind] = useState<valueKind>("presumido")
 const [valueRange, setValueRange] = useState<number>(500000)
 const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
 const [calculatedValue, setCalculatedValue] = useState<number>(0)

 console.log('valueKind', valueKind)

 const selections = {
  real: {
   Supermercado: 0.0183,
   Indústria: 0.0193,
   Atacadista: 0.0103,
   Varejista: 0.0133,
   Concessionária: 0.0155,
   Servicos: 0.0236,
   Transportadora: 0.0058,
  },
  presumido: {
   Indústria: 0.0029,
   Atacadista: 0.0048,
   Varejista: 0.0051,
   Concessionária: 0.0055,
   Servicos: 0.0013,
   Transportadora: 0.0165,
  }
 }

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsSubmitted(true);
  console.log('submit');

  const formData = new FormData(e.currentTarget);
  const formObject = Object.fromEntries(formData.entries());

  console.log(formObject);

  const segmentKey = formObject.segment as string; // Type assertion to string

  // Check if the segmentKey is a valid key in selections[valueKind]
  if (segmentKey in selections[valueKind]) {
    // Use a type assertion to tell TypeScript that segmentKey is a valid key
    setCalculatedValue(valueRange * selections[valueKind][segmentKey as keyof typeof selections[typeof valueKind]]);
  } else {
    console.error('Invalid segment selected');
  }
}

 //function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
 // setIsSubmitted(true)
 // e.preventDefault()
 // console.log('submit')
 //
 // const formData = new FormData(e.currentTarget);
 // const formObject = Object.fromEntries(formData.entries());
 //
 // console.log(formObject)
 //
 // setCalculatedValue(valueRange * selections[valueKind][formObject.segment as segment])
 //
 //}

 function handleValueKind(value: valueKind) {
  setValueKind(value)
 }

 return (
  <motion.section layout className="flex-col items-start   bg-background-alt h-full py-20">
   <motion.h2 layout className="mb-10">Estime quanto é possível recuperar com o serviço de revisão tributária:</motion.h2>

   {isSubmitted ? (
    <motion.div layout className="flex w-full flex-col items-center gap-3">
     <motion.h3
      layout

      transition={{ duration: 1 }}
      initial={{ opacity: 0, y:-20 }} 
      animate={{ opacity: 1, y:0}}


      className="font-sans text-lg font-bold text-white"
     >Recuperação de Crédito estimada:</motion.h3>
     <Counter from={0} to={calculatedValue} />

     <Button 
      className=""
      onClick={() => setIsSubmitted(false)}
     >Refazer Cálculo</Button>
    </motion.div>
   ) : (

    <motion.form
     layout
     initial={{ opacity: 0, y:-20 }}
     animate={{ opacity: 1, y:0 }}
     className="flex w-full flex-col gap-4 "
     onSubmit={handleSubmit}
    >
     <div className="flex justify-between ">
      <div className="flex w-1/3 flex-col items-start justify-center gap-4">
       <h3 className="text-2xl text-primary">Lucro real ou presumido?</h3>
       <div className="flex w-full gap-2">
        <div className="flex w-1/2">
         <input
          type="radio"
          id="real"
          value="real"
          name="profitType"
          className="peer hidden"
          onChange={() => handleValueKind('real')}
         />
         <label
          className="flex w-full items-center justify-center rounded-lg border-2 border-primary bg-transparent p-3 text-xl  transition-all duration-300 peer-checked:bg-primary  peer-checked:text-background "
          htmlFor="real"
         >Real</label>
        </div>
        <div className="flex w-1/2">
         <input
          type="radio"
          id="presumido"
          value="presumido"
          name="profitType"
          className="peer hidden"
          defaultChecked
          onChange={() => handleValueKind('presumido')}
         />
         <label
          className="flex w-full items-center justify-center rounded-lg border-2 border-primary bg-transparent p-3 text-xl  transition-all duration-300 peer-checked:bg-primary  peer-checked:text-background "
          htmlFor="presumido"
         >Presumido</label>
        </div>
       </div>
      </div>

      <div className="flex w-3/5 flex-col items-start justify-center gap-3">
       <h3 className="text-2xl">Qual o segmento?</h3>
       <Select
        name="segment"
        required
       //id="valor-por-tipo"
       //className="flex p-full"
       >
        <SelectTrigger className="bg-gray-transparent w-full border-primary text-">
         <SelectValue placeholder="-- Selecionar Segmento --" />
        </SelectTrigger>
        <SelectContent 
          className="border-primary bg-background-alt text-primary" 
         >
         {Object.keys(selections[valueKind]).map((key) => (
          <SelectItem
            className="border-primary "
           key={key}
           value={key}
          >{key}</SelectItem>
         ))}
        </SelectContent>
       </Select>
      </div>
     </div>

     <div className="flex w-full flex-col gap-4 ">
      <div className="flex justify-between">
       <h3 className="text-2xl">Qual o faturamento anual?</h3>
       <h4 className="font-sans font-bold text-primary  ">R$ {valueRange.toLocaleString('pt-BR')},00</h4>
        
      </div>
      <input
       type="range"
       className="flex w-full"
       name="total"
       min={500000}
       max={1000000000}
       value={valueRange}
       onChange={(e) => setValueRange(Number(e.target.value))}
      />
     </div>

     <Button
      type="submit"
      className="w-full border-2 border-primary text-background text-xl font-bold  hover:bg-transparent hover:text-primary"
     >Estimar Recuperação</Button>
    </motion.form>
   )}

  </motion.section>
 )
}

interface CounterProps {
  from: number;
  to: number;
}


const Counter: React.FC<CounterProps> = ({ from, to }) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        // Format the value using toLocaleString
        node.textContent = `R$ ${Math.round(value).toLocaleString('pt-BR')},00`;
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return (
    <motion.h4
      ref={nodeRef}
      layout
      transition={{ duration: 1 }}
      initial={{ opacity: 0, y:-20 }} 
      animate={{ opacity: 1, y:0}}
      className="font-sans text-7xl font-black "
    />
  );
};

export default Counter;
