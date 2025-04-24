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
    <h2>Agende uma consulta:</h2>
    <p>Entre em contato conosco e agende uma consulta para aprender como fazer o seu negócio decolar.</p>

    <GetInTouch />

   </div>
  </section>
 )
}

