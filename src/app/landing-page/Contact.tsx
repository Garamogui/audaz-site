import { House, Mail, Phone } from 'lucide-react'
import React from 'react'

export const Contact = () => {
 return (
  <section className='bg-background-alt flex-col jutify-center items-start gap-10'>
   <h2>Entre em Contato:</h2>
   <div className=' flex  w-full items-start justify-between'>

    <div className='flex flex-col justify-center items-start gap-3'>
     <h3 className='flex items-center gap-3'><House /> Endereço:</h3>
     <p className='ml-9 max-w-96'>
      <strong>Matriz:</strong> Av. Ibirapuera, 2033 - Indianópolis, São Paulo - SP
     </p>

     <p className='ml-9 max-w-96'>
      <strong>Filial:</strong> Av. Doutor Cardoso de Melo 1470, conjunto 901/912, São Paulo - SP
     </p>
    </div>

    <div className='flex flex-col justify-center items-start'>
     <h3 className='flex items-center gap-3'><Phone /> Telefone:</h3>
     <p className='ml-9'>+55 (11) 97277-3053 </p>
    </div>

    <div className='flex flex-col justify-center items-start'>
     <h3 className='flex items-center gap-3'><Mail /> E-Mail:</h3>
     <p className='ml-9'>marta@audaztributaria.com</p>
    </div>

   </div>
  </section>
 )
}

