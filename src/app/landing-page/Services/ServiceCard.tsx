import { Button } from "@/components/ui/button";
import { SquareCheckBig } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
 title: string;
 items: string[];
 url: string;
 index: number;
}

export const ServiceCard = ({ title, items, url, index }: ServiceCardProps) => {
 return (

  <div className="flex justify-start items-center w-full -mt-10">

   <div
    className="w-28 h-80 bg-background text-foreground font-bold text-xl flex items-center justify-center"
    style={{
     clipPath: 'polygon(100% 75%, 50% 100%, 0% 75%, 0% 0%, 50% 25%, 100% 0%)',
    }}
   >
    {index}
   </div>

   <div className=" bg-transparent p-4 gap-2 flex flex-col w-full">
    <h4 className="text-secondary text-3xl font-bold">{title}</h4>
    <ul className="flex flex-col gap-2">
     {items.map((item, index) => (
      <li key={index} className="flex items-center gap-2">
       <SquareCheckBig className="text-primary" />
       {item}
      </li>
     ))}
    </ul>
    <div className="w-full flex justify-end">
     <Link href={url}>
      <Button variant="outline" className="border-primary text-primary text-lg p-5">
       Mais Detalhes
      </Button>
     </Link>
    </div>
   </div>
  </div >

 );
};
