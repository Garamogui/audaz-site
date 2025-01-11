import { House, Mail, Phone } from 'lucide-react'
import React from 'react'

export const Contact = () => {
  return (
  <section className='bg-background-alt flex-col jutify-center items-start gap-10'>
   <h2>Entre em Contato:</h2>
   <div className=' flex  w-full items-center justify-between'>

    <div className='flex flex-col justify-center items-start'>
     <h3 className='flex items-center gap-3'><House /> Endereço:</h3>
     <p className='ml-9'>Rua dos Bobos, nº 0</p>
    </div>

    <div className='flex flex-col justify-center items-start'>
     <h3 className='flex items-center gap-3'><Phone /> Telefone:</h3>
     <p className='ml-9'>+55 (11) 98427-08117</p>
     <p className='ml-9'>+55 (11) 95798-05776</p>
    </div>

    <div className='flex flex-col justify-center items-start'>
     <h3 className='flex items-center gap-3'><Mail /> E-Mail:</h3>
     <p className='ml-9'>contato@audaz.com.br</p>
    </div>

   </div>
  </section>
  )
}

