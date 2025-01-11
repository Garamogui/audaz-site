export const Schedule = () => {
 return (
  <section className=" justify-between">
   <img
    src="https://images.pexels.com/photos/5325103/pexels-photo-5325103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Homem marcando consulta pelo computador"
    className="h-full"
   />
   <div className=" flex flex-col items-start justify-around gap-2 w-1/2 ">
    <h2>Agende uma consulta:</h2>
    <p>Entre em contato conosco e agende uma consulta para aprender como fazer o seu negócio decolar.</p>
    <a
     href="https://wa.me/5511977508117?text=Quero%20marcar%20uma%20consulta!"
     className="bg-goldenGradient text-black font-bold p-3 rounded hover:scale-105 duration-300"
    > Marcar Consulta</a>


   </div>
  </section>
 )
}

