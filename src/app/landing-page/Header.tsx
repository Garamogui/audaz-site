import Image from "next/image";
import logo from "../../../public/audaz-logo.png";


import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuIndicator,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
 return (
  <header className="flex justify-between items-center bg-transparent backdrop-blur px-20 py-4 fixed w-full z-50 ">
   <Image
    src={logo}
    alt="Logo da Audaz"
    className="w-40"
   />


   <NavigationMenu>
    <NavigationMenuList>
     <NavigationMenuItem>
      <NavigationMenuTrigger>Sobre Nós</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-black border-red-400 ">
       <NavigationMenuLink className="bg-black">
        <div className="flex flex-col w-full">
         <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">Menu</NavigationMenuLink>
        </div>
         <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">Sobre</NavigationMenuLink>
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

