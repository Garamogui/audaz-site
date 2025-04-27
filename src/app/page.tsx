import { MVV } from "./about/MVV";
import { About } from "./landing-page/About";
import { Contact } from "./landing-page/Contact";
import { FAQ } from "./landing-page/FAQ";
import { Header } from "./landing-page/Header";
import { Needs } from "./landing-page/Needs";
import { Presentation } from "./landing-page/Presentation";
import { Schedule } from "./landing-page/Schedule";
import { Services } from "./landing-page/Services";

export default function Home() {
 return (
  <div className="h-full w-full bg-background ">
   <Header />
   <div className="flex flex-col">
    <Presentation />
    <About/>
    <MVV />
    <Needs />
    {
     // <Calculator />
     // <Clients />
    }
    <Services />
    <FAQ/>
    <Contact />
    <Schedule />
   </div>
  </div>
 );
}
