import { About } from "../landing-page/About";
import { Contact } from "../landing-page/Contact";
import { FAQ } from "../landing-page/FAQ";
import { Header } from "../landing-page/Header";
import { Schedule } from "../landing-page/Schedule";

export default function page() {
  return (
  <div className="h-full w-full bg-background ">
   <Header />
   <div>
    <About />
    <FAQ />
    <Contact />
    <Schedule />
   </div>
  </div>
  )
}

