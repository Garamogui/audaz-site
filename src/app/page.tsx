import { About } from "./landing-page/About";
import { Calculator } from "./landing-page/Calculator";
import { Contact } from "./landing-page/Contact";
import { FAQ } from "./landing-page/FAQ";
import { Presentation } from "./landing-page/Presentation";
import { Schedule } from "./landing-page/Schedule";
import { Services } from "./landing-page/Services";

export default function Home() {
 return (
  <div className="h-full w-full bg-background ">
   <Presentation />
   <About />
   <Services />
   <FAQ />
   <Calculator />
   <Contact />
   <Schedule />
  </div>
 );
}
