"use client";
import { Clients } from "../ui/Data";
import TitleHeader from "../ui/TitleHeader";
import GlowCard from "../ui/GlowCard";

const ClientSection = () => {
  return (
    <section id="Clients" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 text-amber-50 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {Clients.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
<p className="font-bold text-white">{testimonial.name}</p>
<p className="text-white">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
