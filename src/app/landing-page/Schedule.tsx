import { GetInTouch } from "@/components/ui/getInTouch"

export const Schedule = () => {
 return (
  <section className=" bg-background-alt justify-between">
   <img
    src="https://images.pexels.com/photos/5325103/pexels-photo-5325103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Homem marcando consulta pelo computador"
    className="h-[90%] rounded-xl"
   />
   <div className=" flex flex-col items-start justify-around gap-2 w-1/2 ">
    <h2></h2>

    <GetInTouch />

    <p className=""><strong>Agende uma reunião para avaliar estratégias jurídicas personalizadas ao seu negócio.</strong></p>
   </div>
  </section>
 )
}

