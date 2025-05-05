import Image from "next/image";
import logo from "../../../public/audaz-logo.png";


import {
 NavigationMenu,
 NavigationMenuContent,
 //NavigationMenuIndicator,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 //NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
//import Link from "next/link";

export const Header = () => {
 return (
  <header className="flex justify-between items-center bg-transparent backdrop-blur px-20 py-4 fixed w-full z-50 ">

   <Link href="/" className="flex items-center">
    <Image
     src={logo}
     width={160}
     height={160}
     alt="Logo da Audaz"
     className="w-40"
    />
   </Link>


   <div className="flex gap-2">
    <ThemeSwitcher />

    <NavigationMenu className="flex gap-2">
     <NavigationMenuList>
      <NavigationMenuItem>
       <NavigationMenuTrigger>Páginas</NavigationMenuTrigger>
       <NavigationMenuContent className=" border- ">
        <NavigationMenuLink className="bg-black">
         <div className="flex  p-4  gap-2">
          <div className="flex flex-col  justify-center items-center w-28 gap-2">
           <p className="text-primary text-md ">Páginas</p>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#presentation">Principal</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">Sobre Nós</NavigationMenuLink>
          </div>

          <div className="w-[2px] bg-background-alt h-[250px] " />

          <div className="flex flex-col  justify-center items-center w-48 gap-2">
           <p className="text-primary text-md ">Seções</p>

           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#mvv">MVV</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#services">Nossos Serviços</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#metodologia">Metodologia</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#faq">Perguntas Frequentes</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contatos">Contato</NavigationMenuLink>
          </div>

         </div>


        </NavigationMenuLink>
       </NavigationMenuContent>
      </NavigationMenuItem>



     </NavigationMenuList>


     <NavigationMenuList>
      <NavigationMenuItem>
       <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
       <NavigationMenuContent className=" border- ">
        <NavigationMenuLink className="bg-black">
         <div className="flex  p-4  gap-2">

          <div className="w-[2px] bg-background-alt h-[250px] " />

          <div className="flex flex-col  justify-center items-center w-48 gap-2">
           <p className="text-primary text-md">Recursos</p>

           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/consultoria-tributaria">Consultoria Tributária</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/revisao-fiscal">Revisão Fiscal</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/defesa">Defesa</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/regularizacao">Regularização Fiscal</NavigationMenuLink>
           <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/bpo-fiscal">BPO Fiscal</NavigationMenuLink>



          </div>

         </div>


        </NavigationMenuLink>
       </NavigationMenuContent>
      </NavigationMenuItem>

      <a
       href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
       className="">
       <Button variant="ghost" className="bg-background"> Entre em Contato</Button>
      </a>

     </NavigationMenuList>

    </NavigationMenu>




   </div>

  </header>
 )
}

