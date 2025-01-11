import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
  return (
   <section className='flex-col bg-[url("https://images.pexels.com/photos/7272207/pexels-photo-7272207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] '>
   <h2>Perguntas Frequentes</h2>
    <Accordion 
      type="single" 
      collapsible 
      className="w-3/4 text-lg p-10 bg-secondary/10 rounded-lg " 
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">Quais são os principais serviços que vocês oferecem?</AccordionTrigger>
        <AccordionContent className="text-secondary">Oferecemos uma gama completa de serviços fiscais, desde planejamento tributário e escrituração fiscal até consultoria especializada em diversos ramos do Direito Tributário.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">Quais são os principais serviços que vocês oferecem?</AccordionTrigger>
        <AccordionContent className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia perferendis, est minus adipisci minima deserunt expedita voluptas id hic fuga laudantium ab! Error quo delectus, blanditiis quibusdam nostrum exercitationem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ducimus porro dolores perspiciatis unde sunt doloribus a? Sapiente nisi fugit, nemo exercitationem rerum odio mollitia iure consequatur ducimus voluptatem dolorum!
        Iure at qui voluptatum aperiam obcaecati debitis voluptates laborum vitae ratione error facere doloribus magnam, porro consequuntur nemo necessitatibus odio harum. Itaque praesentium esse repellendus placeat similique consectetur nemo doloremque!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">Quais são os principais serviços que vocês oferecem?</AccordionTrigger>
        <AccordionContent className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, reprehenderit? Et laudantium doloremque inventore soluta impedit pariatur numquam, quae delectus esse iusto maiores tenetur voluptatibus, ipsam labore iure? Nam, facilis.
        Cum asperiores magnam nobis delectus ut hic sit et, possimus sunt architecto dignissimos in illo ipsam ducimus est aspernatur consequatur laboriosam, ipsum, eius voluptas nihil at debitis reprehenderit. Delectus, pariatur!
        Laboriosam odit reprehenderit nisi hic rerum voluptatum at eligendi ex explicabo officia doloremque, nulla adipisci veniam minus facilis id molestiae. In, inventore facilis reiciendis a sapiente quos minima porro modi.
        Quas, unde. Facere excepturi minus explicabo nesciunt beatae numquam, doloribus, neque ut eaque aut quis fuga ea expedita dolorum pariatur, ex nulla alias. Reprehenderit aliquam officiis quisquam a recusandae amet!
        Molestias minima, repudiandae ipsa illum ratione, rerum expedita earum a corporis perferendis amet placeat quos. Tenetur, maxime at incidunt totam soluta eos optio voluptates nesciunt, recusandae saepe repellendus temporibus sed!
        Repudiandae suscipit sit deleniti repellat excepturi odio reiciendis sunt accusamus, quo, ipsa quia et asperiores consequuntur quos, odit veritatis explicabo voluptates iusto assumenda quisquam temporibus provident necessitatibus! Magni, sequi itaque!
        Amet earum a quibusdam obcaecati pariatur eveniet sequi, aperiam nisi consequatur, at odio iure esse expedita? Tenetur, expedita, doloremque quia voluptates impedit molestias aliquid animi, dignissimos amet esse voluptatibus reiciendis.
        Eaque, ex. Asperiores minus voluptates, corrupti odio officia perspiciatis saepe. In, hic. Laudantium, at nulla sapiente inventore quibusdam dolor laboriosam? Veritatis harum voluptatem ut ratione quae earum at suscipit dignissimos.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
  )
}

