import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../lib/utils";
import { useContent } from "../../contexts/ContentContext";

interface FAQSectionProps {
  className?: string;
}

export default function FAQSection({ className }: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { content } = useContent();
  const faqData = content.faq;

  return (
    <section id="faq" className={cn("bg-white", className)}>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
            {faqData.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            {faqData.subtitle}
          </p>

          <div className="divide-y divide-slate-200">
            {(faqData.faqs || []).map((faq: any, index: number) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="py-4 text-left"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-2 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-bold text-slate-900 pr-8 group-hover:text-blue-600 transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 transition-transform duration-300",
                        isOpen ? "text-[#ff9600] rotate-180" : "text-slate-400"
                      )}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="pb-4 pt-2 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block lg:col-span-7">
          <img src={faqData.heroImageUrl || undefined} alt="Frequently Asked Questions" className="w-full h-auto object-cover scale-110" />
        </div>
      </div>
    </section>
  );
}
