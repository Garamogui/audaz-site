import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel"


export const Clients = () => {
 return (
  <section className="flex-col gap-10 ">

   <h2>Clientes Satisfeitos</h2>

    <Carousel >
    <CarouselContent>
     <CarouselItem className="w-full h-full flex flex-col justify-center items-center basis-1/3">
       <img
        src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Foto Slack"
        className="size-60 object-cover rounded-xl"
       />
     </CarouselItem>
     <CarouselItem className="w-full h-full flex flex-col justify-center items-center basis-1/3">
       <img
        src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Foto de um cliente sorrindo"
        className="size-60 object-cover rounded-xl"
       />
     </CarouselItem>
     <CarouselItem className="w-full h-full flex flex-col justify-center items-center basis-1/3">
       <img
        src="https://images.pexels.com/photos/5852135/pexels-photo-5852135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Foto de um cliente sorrindo"
        className="size-60 object-cover rounded-xl"
       />
     </CarouselItem>
     <CarouselItem className="w-full h-full flex flex-col justify-center items-center basis-1/3">
       <img
        src="https://images.pexels.com/photos/13008298/pexels-photo-13008298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Foto de um cliente sorrindo"
        className="size-60 object-cover rounded-xl"
       />
     </CarouselItem>
     <CarouselItem className="w-full h-full flex flex-col justify-center items-center basis-1/3">
       <img
        src="https://images.pexels.com/photos/9101747/pexels-photo-9101747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Foto de um cliente sorrindo"
        className="size-60 object-cover rounded-xl"
       />
     </CarouselItem>

    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>

  </section>
 )
}

