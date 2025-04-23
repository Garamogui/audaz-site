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


   <NavigationMenu>
    <NavigationMenuList>
     <NavigationMenuItem>
      <NavigationMenuTrigger>Sobre Nós</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-black border-red-400 ">
       <NavigationMenuLink className="bg-black">
        <div className="flex  p-4  gap-2">
         <div className="flex flex-col  justify-center items-center w-24 gap-2">
          <p className="text-white text-md ">Páginas</p>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">Principal</NavigationMenuLink>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">Sobre</NavigationMenuLink>
         </div>

         <div className="w-[2px] bg-background-alt h-[250px] " />

         <div className="flex flex-col  justify-center items-center w-48 gap-2">
          <p className="text-white text-md ">Recursos</p>

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

  </header>
 )
}

